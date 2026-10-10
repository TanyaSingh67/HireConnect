import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(`/api/auth/reset-password/${token}`, { password });
      alert('Password Reset Successful!');
      navigate('/login');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Link expired or invalid');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded mb-4"
        />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
          Update Password
        </button>
      </form>
      {msg && <p className="mt-4 text-sm text-red-600">{msg}</p>}
    </div>
  );
};

export default ResetPassword;