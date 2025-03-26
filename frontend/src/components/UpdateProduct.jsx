import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; // Added useParams
import "./index.css";

function UpdateProduct() { 
    const time = new Date();
    const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        featured: "",
        rating: "",
        createdAt: time.toLocaleDateString(),
        company: "",
    });

    // Fetch product details when the component mounts
    useEffect(() => {
        axios
            .get(`https://fullstackcrud-z7zq.onrender.com/products/${id}`)
            .then((res) => setFormData(res.data))
            .catch((err) => console.log("Error fetching product:", err));
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!formData.name || !formData.price || !formData.rating || !formData.company || !formData.createdAt) {    
            alert("Please fill all required fields before submitting.");
            return;
        }
    
        try {
            const response = await axios.patch(`https://fullstackcrud-z7zq.onrender.com/products/${id}`, formData, {
                headers: { "Content-Type": "application/json" },
            });
    
            if (response.status === 200) {
                alert("Product updated successfully!");
                setValidated(true);
                navigate("/products"); // Redirect to products page
            } else {
                alert("Error updating the product. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
            alert("Something went wrong! " + (error.response ? error.response.data.message : ""));
        }
    };

    const handleInputs = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5 mb-5" style={{ minHeight: "90vh" }}>
            <div className="border border-success bg-success-subtle rounded p-5 shadow-sm w-100" style={{ maxWidth: "700px" }}>
                <h3 className="text-center text-success">Update Product</h3> {/* Changed from "Create Your Product" */}
                <hr />
                <form noValidate className={`needs-validation ${validated ? "was-validated" : ""}`} onSubmit={handleSubmit}>
                    <div className="mb-3 mt-4">
                        <label htmlFor="title" className="form-label">Name:</label>
                        <input type="text" id="title" name="name" value={formData.name} placeholder="Enter product name" className="form-control border-dark-subtle" onChange={handleInputs} required />
                        <div className="invalid-feedback">Please enter the Name of the Product</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="featured" className="form-label">Featured:</label>
                        <input type="text" id="featured" name="featured" placeholder="Enter true or false" value={formData.featured} className="form-control border-dark-subtle" onChange={handleInputs} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input type="number" id="price" name="price" placeholder="Enter the price" value={formData.price} className="form-control border-dark-subtle" onChange={handleInputs} required />
                        <div className="invalid-feedback">Price should be valid</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">Rating:</label>
                        <input id="rating" type="number" name="rating" value={formData.rating} className="form-control border-dark-subtle" onChange={handleInputs} placeholder="Enter rating between 1 to 5" required />
                        <div className="invalid-feedback">Please enter the rating</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Enter the company name:</label>
                        <input type="text" id="company" name="company" value={formData.company} placeholder="Enter the name of the company" className="form-control border-dark-subtle" onChange={handleInputs} required />
                        <div className="invalid-feedback">Please enter the company name</div>
                    </div>
                    <button type="submit" className="btn btn-outline-success mt-2 w-100">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;
