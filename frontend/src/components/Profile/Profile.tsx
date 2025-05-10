import React, { useState } from 'react';
import './Profile.css';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState(user?.name || 'John Doe');
    const [email, setEmail] = useState(user?.email || 'john@example.com');
    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState('https://via.placeholder.com/150');
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

    // Static data for demo
    const languages = ['Tamil', 'Malayalam'];
    const categories = ['Alphabets', 'Numbers', 'Vocabulary', 'Phrases', 'Grammar', 'Quizzes', 'Games'];

    const handleSave = () => {
        // Add API call here to update user info
        setIsEditing(false);
        toast.success('Profile updated successfully');
    };

    const handleLogout = async () => {
        try {
            await logout();
            toast.success('Logged out successfully');
            navigate('/auth/login');
        } catch (error) {
            toast.error('Failed to logout');
        }
    };

    const handleChangePassword = () => {
        // Handle password change logic
        setIsPasswordModalOpen(false);
        toast.success('Password changed successfully');
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="edit-input"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="edit-input"
                        />
                    </>
                ) : (
                    <>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </>
                )}
            </div>

            <div className="profile-sections">
                <section className="languages-section">
                    <h3>Languages</h3>
                    <div className="languages-list">
                        {languages.map((lang) => (
                            <span key={lang} className="language-tag">{lang}</span>
                        ))}
                    </div>
                </section>

                <section className="learning-categories-section">
                    <h3>Learning Categories</h3>
                    <div className="categories-grid">
                        {categories.map((category) => (
                            <div key={category} className="category-card">
                                <div className="category-icon">📘</div>
                                <p>{category}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="profile-actions">
                {isEditing ? (
                    <>
                        <button className="btn save" onClick={handleSave}>Save</button>
                        <button className="btn cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <button className="btn edit" onClick={() => setIsEditing(true)}>Edit Profile</button>
                )}
                <button
                    className="btn logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>
                <button
                    className="btn change-password"
                    onClick={() => setIsPasswordModalOpen(true)}
                >
                    Change Password
                </button>
            </div>

            {isPasswordModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Change Password</h2>
                        <input type="password" placeholder="New Password" />
                        <button onClick={handleChangePassword} className="btn save">Change Password</button>
                        <button onClick={() => setIsPasswordModalOpen(false)} className="btn cancel">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
