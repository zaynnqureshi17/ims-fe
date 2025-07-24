"use client";
import { Input } from "@/components/ui/input";
import { UploadIcon } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface UploadSingleImageProps {
  onFileUpload: (file: File) => void;
}

const UploadSingleImage: React.FC<UploadSingleImageProps> = ({
  onFileUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onFileUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <label className="text-lg text-gray-800">Logo</label>
      <div
        className="relative flex flex-col items-center space-y-2"
        onClick={handleButtonClick}
      >
        <div
          className={`flex flex-col items-center justify-center ${image ? " p-1" : "p-8"} border-2 border-dashed border-[color:var(--accent-orange)] rounded-lg cursor-pointer bg-white `}
        >
          {image ? (
            <Image
              src={image}
              alt="Uploaded"
              width={100}
              height={100}
              className="w-[110px] h-[120px] object-contain"
            />
          ) : (
            <UploadIcon className="w-8 h-8 text-accent-orange" />
          )}
          {!image && <span className="mt-2 text-gray-500">Upload</span>}
          {image && (
            <UploadIcon className="absolute bottom-0 -right-1 w-6 h-6 text-white  bg-accent-orange p-1 rounded-sm" />
          )}
        </div>
        <Input
          ref={fileInputRef}
          type="file"
          id="file-upload"
          className="hidden cursor-pointer"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default UploadSingleImage;
