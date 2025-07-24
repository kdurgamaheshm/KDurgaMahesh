import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function RateProfile() {
    const [showForm, setShowForm] = useState(true);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async () => {
        try {
            // Firestore: Save rating
            await addDoc(collection(db, "ratings"), {
                rating,
                feedback,
                timestamp: serverTimestamp(),
            });

            setSubmitted(true);
            setTimeout(() => {
                setShowForm(false);
                setRating(0);
                setFeedback("");
                setSubmitted(false);
            }, 3000);
        } catch (error) {
            console.error("Error saving rating: ", error);
        }
    };

    return (
        <section className="bg-green-50 py-16 px-4">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-green-700 mb-6">Rate My Profile</h2>



                {showForm && (
                    <div className="mt-6">
                        <div className="flex justify-center gap-2 mb-4">
                            {[...Array(5)].map((_, index) => {
                                const currentRating = index + 1;
                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setRating(currentRating)}
                                        onMouseEnter={() => setHover(currentRating)}
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <FaStar
                                            className={`text-3xl cursor-pointer transition-colors duration-200 ${
                                                currentRating <= (hover || rating)
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>

                        <textarea
                            placeholder="Optional feedback (e.g., design, content, etc.)"
                            rows="4"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full max-w-md mx-auto p-3 border border-green-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                        >
                            Submit Rating
                        </button>
                    </div>
                )}

                {submitted && (
                    <div className="mt-6 text-green-700 font-medium bg-green-100 p-3 rounded shadow">
                        ✅ Thank you for rating! I appreciate your feedback.
                    </div>
                )}
            </div>
        </section>
    );
}

export default RateProfile;
