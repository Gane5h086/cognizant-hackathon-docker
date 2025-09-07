import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import FormInput from '../components/common/FormInput';
import Button from '../components/common/Button';
import { MailIcon } from '../components/icons/Icons';

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Validation rules
    const validateField = (name, value) => {
        let message = '';

        if (name === 'email') {
            if (!value) {
                message = 'Email or Hospital ID is required.';
            } else {
                // Allow either hospital email or hospital ID (HIDxxxxx)
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const hospitalIdRegex = /^HID\d{5}$/i;
                if (!emailRegex.test(value) && !hospitalIdRegex.test(value)) {
                    message = 'Enter a valid email or Hospital ID (e.g., HID12345).';
                }
            }
        }

        if (name === 'password') {
            if (!value) {
                message = 'Password is required.';
            } else if (value.length < 8) {
                message = 'Password must be at least 8 characters long.';
            }
        }

        return message;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate in real-time
        setErrors({ ...errors, [name]: validateField(name, value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError('');

        // Validate all fields before submit
        const newErrors = {
            email: validateField('email', formData.email),
            password: validateField('password', formData.password),
        };

        setErrors(newErrors);

        // Stop submission if any errors exist
        if (Object.values(newErrors).some((msg) => msg)) return;

        setIsLoading(true);
        try {
            await login(formData);
            navigate('/dashboard');
        } catch (err) {
            setServerError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-center">
            <span className="inline-block bg-blue-100 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                Authentication
            </span>
            <h2 className="mt-4 text-2xl font-bold text-text-primary">Welcome back</h2>
            <p className="mt-2 text-sm text-text-secondary">
                Access your dashboard to monitor equipment reliability.
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <FormInput
                    label="Email or Hospital ID"
                    type="text"
                    name="email"
                    placeholder="name@hospital.org or HID12345"
                    value={formData.email}
                    onChange={handleChange}
                    Icon={MailIcon}
                    required
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}

                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Min 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {errors.password && <p className="text-sm text-red-600">{errors.password}</p>}

                {serverError && <p className="text-sm text-red-600">{serverError}</p>}

                <Button type="submit" isLoading={isLoading} fullWidth variant="default">
                    Login
                </Button>
            </form>

            <div className="mt-6 flex justify-between items-center text-sm">
                <Link to="/forgot-password" className="font-medium text-secondary hover:text-secondary-hover">
                    Forgot Password?
                </Link>
                <Link to="/signup" className="font-medium text-secondary hover:text-secondary-hover">
                    Don't have an account? Sign Up
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import FormInput from '../components/common/FormInput';
// import Button from '../components/common/Button';
// import { MailIcon } from '../components/icons/Icons';

// const LoginPage = () => {
//     const navigate = useNavigate();
//     const { login } = useAuth();
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError('');
//         try {
//             await login(formData);
//             navigate('/dashboard');
//         } catch (err) {
//             setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="text-center">
//             <span className="inline-block bg-blue-100 text-primary text-sm font-semibold px-3 py-1 rounded-full">
//                 Authentication
//             </span>
//             <h2 className="mt-4 text-2xl font-bold text-text-primary">Welcome back</h2>
//             <p className="mt-2 text-sm text-text-secondary">
//                 Access your dashboard to monitor equipment reliability.
//             </p>
//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                 <FormInput label="Email or Hospital ID" type="email" name="email" placeholder="name@hospital.org or HID12345" value={formData.email} onChange={handleChange} Icon={MailIcon} required />
//                 <FormInput label="Password" type="password" name="password" placeholder="Min 8 characters" value={formData.password} onChange={handleChange} required />
//                 {error && <p className="text-sm text-red-600">{error}</p>}
//                 <Button type="submit" isLoading={isLoading} fullWidth variant="deafult">
//                     Login
//                 </Button>
//             </form>
//             <div className="mt-6 flex justify-between items-center text-sm">
//                 <Link to="/forgot-password" className="font-medium text-secondary hover:text-secondary-hover">Forgot Password?</Link>
//                 <Link to="/signup" className="font-medium text-secondary hover:text-secondary-hover">Don't have an account? Sign Up</Link>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;
