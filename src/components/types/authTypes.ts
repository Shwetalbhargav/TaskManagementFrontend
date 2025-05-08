export interface User {
    username: string;
    role: 'admin' | 'manager' | 'user';
  }
  
  export interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export interface RegisterData extends LoginCredentials {
    email?: string;
    role?: User['role'];
  }
  
  export interface AuthResponse {
    token: string;
    user: User;
  }
  