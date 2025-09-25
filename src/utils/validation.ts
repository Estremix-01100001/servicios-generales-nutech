// Utilidades de validación reutilizables

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

export const VALIDATION_RULES: ValidationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: true,
    pattern: /^[\+]?[0-9\s\-\(\)]+$/
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 500
  }
};

export const validateField = (name: string, value: string): string | null => {
  const rule = VALIDATION_RULES[name];
  if (!rule) return null;

  // Required validation
  if (rule.required && !value.trim()) {
    return `${name} es requerido`;
  }

  // Skip other validations if value is empty and not required
  if (!value.trim()) return null;

  // Length validations
  if (rule.minLength && value.length < rule.minLength) {
    return `${name} debe tener al menos ${rule.minLength} caracteres`;
  }
  
  if (rule.maxLength && value.length > rule.maxLength) {
    return `${name} no puede tener más de ${rule.maxLength} caracteres`;
  }

  // Pattern validation
  if (rule.pattern && !rule.pattern.test(value)) {
    return `${name} no tiene un formato válido`;
  }

  // Custom validation
  if (rule.custom) {
    return rule.custom(value);
  }

  return null;
};

export const validateForm = (formData: Record<string, string>, rules: ValidationRules = VALIDATION_RULES) => {
  const errors: Record<string, string> = {};
  
  Object.keys(rules).forEach(field => {
    const error = validateField(field, formData[field] || '');
    if (error) {
      errors[field] = error;
    }
  });
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
