export interface AuthResponse {
  token: string;
  applicationId: string;
  email: string;
  mustResetPassword: boolean;
  lockoutEnabled: boolean;
}
