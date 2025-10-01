// Hook personalizado para manejo de formularios

import { useState, useCallback } from 'react';
import { validateForm, VALIDATION_RULES, ValidationRules } from '../utils/validation';

export interface UseFormReturn<T> {
  formData: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent, onSubmit: (data: T) => Promise<void>) => Promise<void>;
  setFormData: (data: T) => void;
  setErrors: (errors: Record<string, string>) => void;
  resetForm: () => void;
}

export const useForm = <T extends Record<string, any>>(
  initialData: T,
  validationRules: ValidationRules = VALIDATION_RULES
): UseFormReturn<T> => {
  const [formData, setFormData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (
    e: React.FormEvent,
    onSubmit: (data: T) => Promise<void>
  ) => {
    e.preventDefault();
    
    const { errors: validationErrors, isValid } = validateForm(formData, validationRules);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validationRules]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setIsSubmitting(false);
  }, [initialData]);

  const isValid = Object.keys(errors).length === 0;

  return {
    formData,
    errors,
    isSubmitting,
    isValid,
    handleInputChange,
    handleSubmit,
    setFormData,
    setErrors,
    resetForm
  };
};
