'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Upload, X } from 'lucide-react';

interface PropertyFormValues {
  type: string;
  status: string;
  price: string;
  rooms: number;
  beds: number;
  baths: number;
  area: string;
  premiere: string;
  description: string;
  address: string;
  zipCode: string;
  videoLink: string;
  features: string[];
  media: File[];
}

export default function AddPropertyForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<PropertyFormValues>({
    type: '',
    status: '',
    price: '',
    rooms: 1,
    beds: 1,
    baths: 1,
    area: '',
    premiere: '',
    description: '',
    address: '',
    zipCode: '',
    videoLink: '',
    features: [],
    media: [],
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setFormData((prev) => ({ ...prev, media: [...prev.media, ...Array.from(e.target.files)] }));
  //   }
  // };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    router.push('/properties');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-4xl mx-auto bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input name="type" placeholder="Property Type" className="input input-bordered w-full" onChange={handleChange} required />
          <select name="status" className="select select-bordered w-full" onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="For Rent">For Rent</option>
            <option value="For Sale">For Sale</option>
          </select>
          <input name="price" placeholder="Property Price" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="rooms" type="number" min="1" placeholder="Max Rooms" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="beds" type="number" min="1" placeholder="Beds" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="baths" type="number" min="1" placeholder="Baths" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="area" placeholder="Area" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="premiere" placeholder="Premiere" className="input input-bordered w-full" onChange={handleChange} required />
        </div>
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" onChange={handleChange}></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input name="address" placeholder="Address" className="input input-bordered w-full" onChange={handleChange} required />
          <input name="zipCode" placeholder="Zip Code" className="input input-bordered w-full" onChange={handleChange} required />
        </div>
        <div className="border p-4 rounded-md">
          <label className="flex items-center gap-2 cursor-pointer">
            <Upload className="w-5 h-5" />
            <span>Upload Media</span>
            {/* <input type="file" multiple className="hidden" onChange={handleFileUpload} /> */}
          </label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {formData.media.map((file, index) => (
              <div key={index} className="relative border p-2 rounded-md">
                <span className="block text-xs truncate">{file.name}</span>
                <button type="button" className="absolute top-1 right-1 text-red-500" onClick={() => removeFile(index)}>
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <input name="videoLink" placeholder="Video Link (mp4)" className="input input-bordered w-full" onChange={handleChange} />
        <div className="grid grid-cols-3 gap-2">
          {['Emergency Exit', 'CCTV', 'Free Wi-Fi', 'Parking', 'AC', 'Security'].map((feature) => (
            <label key={feature} className="flex items-center gap-2">
              <input type="checkbox" name="features" value={feature} onChange={(e) => {
                const checked = e.target.checked;
                setFormData((prev) => ({
                  ...prev,
                  features: checked ? [...prev.features, feature] : prev.features.filter(f => f !== feature),
                }));
              }} />
              {feature}
            </label>
          ))}
        </div>
        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={() => router.push('/properties')}>Cancel</button>
        </div>
      </form>
    </motion.div>
  );
}

