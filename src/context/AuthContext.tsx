import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface User {
    email: string;
    role: 'admin';
}

interface AuthContextType {
    user: User | null;
    login: (email: string, pass: string) => boolean;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check local storage for session
        const storedUser = localStorage.getItem('admin_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email: string, pass: string) => {
        // Hardcoded Admin Credentials
        if (email === 'admin@gmail.com' && pass === '123456') {
            const adminUser: User = { email, role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('admin_user', JSON.stringify(adminUser));
            router.push('/');
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('admin_user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
