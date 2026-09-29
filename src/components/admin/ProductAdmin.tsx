/* eslint-disable react-hooks/immutability */
import React, { useState, useEffect } from 'react';

interface Product {
  _id?: string;
  name: string;
  description: string;
  category: string;
  techStack: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
}

const ProductAdmin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState<Product>({
    name: '',
    description: '',
    category: '',
    techStack: [],
    imageUrl: '',
    projectUrl: '',
    githubUrl: '',
  });

  const apiUrl = 'http://localhost:8000/api/products'; // Assuming backend runs on 8000

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechStackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const techArray = e.target.value.split(',').map(tech => tech.trim());
    setFormData({ ...formData, techStack: techArray });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchProducts();
        setFormData({
          name: '',
          description: '',
          category: '',
          techStack: [],
          imageUrl: '',
          projectUrl: '',
          githubUrl: '',
        });
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: '#fff', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <h1>Product Admin</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} required />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
        <input type="text" name="techStack" placeholder="Tech Stack (comma separated)" value={formData.techStack.join(', ')} onChange={handleTechStackChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleInputChange} required />
        <input type="text" name="projectUrl" placeholder="Project URL" value={formData.projectUrl} onChange={handleInputChange} />
        <input type="text" name="githubUrl" placeholder="GitHub URL" value={formData.githubUrl} onChange={handleInputChange} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}>Add Product</button>
      </form>

      <h2>Existing Products</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #334155', padding: '15px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <button onClick={() => handleDelete(product._id as string)} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAdmin;
