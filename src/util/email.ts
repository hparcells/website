export function isValidEmail(email: string) {
  return email.match(/^\S+@\S+\.\S+$/);
}
