"use client";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useController, useFormContext } from "react-hook-form";

interface UploadSingleImageProps {
  name: string;
  label?: string;
  image_url?: string | null; // Existing image for edit mode
  rules?: Record<string, any>;
}

const UploadSingleImage: React.FC<UploadSingleImageProps> = ({
  name,
  label = "Logo",
  image_url = null,
  rules,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { control } = useFormContext();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  // Helper: Get preview URL from File or string
  const getPreviewUrl = (val: unknown, fallback?: string | null) => {
    if (val instanceof File) {
      return URL.createObjectURL(val);
    }
    if (typeof val === "string" && val.trim() !== "") {
      return val;
    }
    return fallback || null;
  };

  const [preview, setPreview] = useState<string | null>(
    getPreviewUrl(value, image_url),
  );

  // Sync preview when value changes
  useEffect(() => {
    setPreview(getPreviewUrl(value, image_url));
  }, [value, image_url]);

  // Cleanup object URL when component unmounts
  useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file); // react-hook-form field update
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <label className="text-lg text-gray-800">{label}</label>
      <div
        className="relative flex flex-col items-center space-y-2"
        onClick={handleButtonClick}
      >
        <div
          className={`flex flex-col items-center justify-center ${
            preview ? "p-1" : "p-8"
          } border-2 border-dashed border-[color:var(--accent-orange)] rounded-lg cursor-pointer bg-white`}
        >
          {preview ? (
            <Image
              src={preview}
              alt="Uploaded"
              width={100}
              height={100}
              className="w-[110px] h-[120px] object-contain"
            />
          ) : (
            <UploadIcon className="w-8 h-8 text-accent-orange" />
          )}
          {!preview && <span className="mt-2 text-gray-500">Upload</span>}
          {preview && (
            <UploadIcon className="absolute bottom-0 -right-1 w-6 h-6 text-white bg-accent-orange p-1 rounded-sm" />
          )}
        </div>
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default UploadSingleImage;
