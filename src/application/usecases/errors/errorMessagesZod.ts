export const errorMessages = {
  required: (field: string) => `O campo ${field} é obrigatório`,
  invalidType: (field: string, type: string) => `O campo ${field} deve ser do tipo ${type}`,
  minLength: (field: string, length: number) =>
    `O campo ${field} deve ter no mínimo ${length} caracteres`,
  email: (field: string) => `O campo ${field} deve ser um email válido`,
};
