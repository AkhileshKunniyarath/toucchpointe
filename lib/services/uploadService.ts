const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

export interface UploadedImage {
  objectName: string;
  url: string;
  mimeType: string;
  size: number;
}

export const uploadImage = async (file: File): Promise<UploadedImage> => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(`${API_BASE}/api/uploads/image`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.message || "Failed to upload image");
  }

  return response.json();
};
