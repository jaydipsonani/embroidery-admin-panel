import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';
import styles from './Login.module.scss';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { ShieldCheck, Mail, Lock } from 'lucide-react';
import { toastSuccess, toastError } from '@/lib/toast';

export default function Login() {
    const { login } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Simulate network delay for "Premium" feel
        setTimeout(() => {
            const success = login(formData.email, formData.password);
            if (success) {
                toastSuccess('Welcome back, Admin!');
                // Redirect handled in context
                router.push('/admin');
            } else {
                toastError('Invalid credentials. Access denied.');
                setError('Invalid credentials. Access denied.');
                setIsLoading(false);
            }
        }, 800);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <ShieldCheck className={styles.icon} />
                </div>

                <h1 className={styles.title}>Admin Portal</h1>
                <p className={styles.subtitle}>Secure access for platform managers</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        icon={<Mail size={18} />}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />

                    <Input
                        type="password"
                        placeholder="••••••"
                        icon={<Lock size={18} />}
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        error={error}
                    />

                    <Button type="submit" size="lg" isLoading={isLoading}>
                        Sign In to Dashboard
                    </Button>
                </form>

                <div className={styles.footer}>
                    &copy; {new Date().getFullYear()} Embroidery Marketplace
                </div>
            </div>
        </div>
    );
}
