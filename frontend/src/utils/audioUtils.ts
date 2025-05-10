/**
 * Utility for playing audio in the application
 */

// Cache for storing generated audio URLs
const audioCache: Record<string, string> = {};

// The API key for ElevenLabs - using the updated key
const ELEVEN_LABS_API_KEY = 'Uzi84l9Ggw2h7_XqjX9MHOM3HnPZSko2STYTkAp4eRk6';

/**
 * Generate a simple tone audio for development/testing purposes
 * @param duration Duration of the tone in seconds
 * @param frequency Frequency of the tone in Hz
 * @returns A blob URL to the generated audio
 */
const generateToneAudio = (duration: number = 1, frequency: number = 440): Promise<string> => {
  return new Promise((resolve) => {
    // Create an audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create an oscillator node
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Configure oscillator
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency; // value in hertz
    
    // Set volume
    gainNode.gain.value = 0.5;
    
    // Connect nodes
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create a MediaStream destination node
    const destination = audioContext.createMediaStreamDestination();
    gainNode.connect(destination);
    
    // Create a media recorder to record the audio
    const mediaRecorder = new MediaRecorder(destination.stream);
    const chunks: Blob[] = [];
    
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      const url = URL.createObjectURL(blob);
      resolve(url);
      
      // Clean up
      audioContext.close();
    };
    
    // Start recording
    mediaRecorder.start();
    
    // Start oscillator
    oscillator.start();
    
    // Stop after duration
    setTimeout(() => {
      oscillator.stop();
      mediaRecorder.stop();
    }, duration * 1000);
  });
};

/**
 * Generate speech using the Web Speech API (Browser's built-in TTS)
 * This provides a more natural audio fallback compared to simple tones
 * @param text The text to convert to speech
 * @returns A promise that resolves when speech synthesis is complete
 */
const generateWebSpeechAudio = (text: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      // Check if speech synthesis is supported
      if (!window.speechSynthesis) {
        throw new Error('Speech synthesis not supported in this browser');
      }
      
      // Create an audio context for recording
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const destination = audioContext.createMediaStreamDestination();
      const mediaRecorder = new MediaRecorder(destination.stream);
      const chunks: Blob[] = [];
      
      // Set up the utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Configure speech properties
      utterance.rate = 0.9; // Slightly slower for better clarity
      utterance.pitch = 1;
      utterance.volume = 1;
      
      // Try to find a good voice for the language
      const voices = window.speechSynthesis.getVoices();
      const preferredVoices = voices.filter(voice => 
        voice.lang.startsWith('en') || 
        voice.lang.startsWith('hi') ||  // Hindi is somewhat closer to Tamil/Malayalam than English
        voice.name.includes('Google')   // Google voices tend to be higher quality
      );
      
      if (preferredVoices.length > 0) {
        utterance.voice = preferredVoices[0];
      }
      
      // Connect an audio element to capture the speech
      const audio = new Audio();
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        resolve(url);
        
        // Clean up
        audioContext.close();
      };
      
      // Start recording
      mediaRecorder.start();
      
      // Play speech and record it
      window.speechSynthesis.speak(utterance);
      
      // Set timeout to stop recording after utterance is expected to finish
      // Estimate speech duration based on text length and speaking rate
      const estimatedDuration = Math.max(2, text.length * 50 / 1000);
      setTimeout(() => {
        if (mediaRecorder.state === 'recording') {
          mediaRecorder.stop();
        }
      }, estimatedDuration * 1000);
      
      // Handle end of speech
      utterance.onend = () => {
        if (mediaRecorder.state === 'recording') {
          setTimeout(() => mediaRecorder.stop(), 500); // Give a slight delay to capture the full speech
        }
      };
      
      // Handle error
      utterance.onerror = (event) => {
        reject(new Error(`Speech synthesis error: ${event.error}`));
      };
    } catch (error) {
      console.error('Web Speech API error:', error);
      reject(error);
    }
  });
};

/**
 * Generate audio from text using either ElevenLabs API, Web Speech API, or a fallback tone generator
 * @param text The text to convert to speech
 * @param language The language of the text ('tamil' or 'malayalam')
 * @returns A promise that resolves to the URL of the generated audio
 */
export const generateAudio = async (
  text: string,
  language: 'tamil' | 'malayalam' = 'tamil',
  apiKey?: string
): Promise<string> => {
  // If we've already generated this audio, return the cached URL
  const cacheKey = `${language}-${text}`;
  if (audioCache[cacheKey]) {
    console.log('Using cached audio for:', text);
    return audioCache[cacheKey];
  }

  // Use provided API key or the default one
  const key = apiKey || ELEVEN_LABS_API_KEY;

  try {
    // Select the appropriate voice ID based on language
    const voiceId = language === 'tamil' 
      ? 'Xb7hH8MSUJpSbSDYk0k2' // Alice voice for Tamil
      : 'XB0fDUnXU5powFXDhCwa'; // Charlotte voice for Malayalam
    
    console.log(`Generating audio for "${text}" in ${language} with voice ID ${voiceId}`);
    
    // Try to use ElevenLabs API first (best quality)
    try {
      // Make the API request to ElevenLabs
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId + '/stream', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': key
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to generate audio: ${response.status}`);
      }

      // Convert the response to a blob and create a URL
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      
      // Cache the generated audio URL
      audioCache[cacheKey] = audioUrl;
      
      console.log('Successfully generated audio with ElevenLabs API');
      
      return audioUrl;
    } catch (apiError) {
      console.warn('ElevenLabs API error, trying Web Speech API:', apiError);
      
      // Try Web Speech API as a first fallback (better than tones)
      try {
        const audioUrl = await generateWebSpeechAudio(text);
        
        // Cache the generated audio URL
        audioCache[cacheKey] = audioUrl;
        
        console.log('Using Web Speech API as fallback');
        
        return audioUrl;
      } catch (webSpeechError) {
        console.warn('Web Speech API error, falling back to tone generator:', webSpeechError);
        
        // Generate different tones based on the text and language as a last resort
        const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        const frequency = 220 + (hash % 660);
        
        // Generate a tone instead
        const audioUrl = await generateToneAudio(1.5, frequency);
        
        // Cache the generated audio URL
        audioCache[cacheKey] = audioUrl;
        
        console.log('Using generated tone audio as last resort fallback');
        
        return audioUrl;
      }
    }
  } catch (error) {
    console.error('Error generating audio:', error);
    throw error;
  }
};

/**
 * Play an audio file from the provided URL
 * @param audioUrl The URL of the audio file to play
 * @returns A promise that resolves when the audio starts playing or rejects if there's an error
 */
export const playAudio = (audioUrl?: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (!audioUrl) {
      console.log('No audio available');
      reject(new Error('No audio URL provided'));
      return;
    }
    
    const audio = new Audio(audioUrl);
    
    audio.onplay = () => {
      resolve();
    };
    
    audio.onerror = (err) => {
      console.error('Failed to play audio:', err);
      reject(err);
    };
    
    audio.play().catch(err => {
      console.error('Failed to play audio:', err);
      reject(err);
    });
  });
};
