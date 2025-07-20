// components/FormInputPassword.tsx
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

interface FormInputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
}

const FormInputPassword: React.FC<FormInputPasswordProps> = ({
  name,
  label,
  placeholder,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false)
            const { register } = useFormContext ();

  return (
    <div className="space-y-1 relative mb-4">
      <Label>{label}</Label>
      <div className="relative">
        <Input
        {...register(name)}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className="pr-10"
          {...rest}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-2 flex items-center text-muted-foreground"
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </div>
  )
}

export default FormInputPassword
