const listings = [
  {
    title: "Ocean View Apartment",
    image: "https://images.pexels.com/photos/2611028/pexels-photo-2611028.jpeg",
    price: "$180/night",
    rating: "★ 4.8",
    smoking: false,
    amenities: ["wifi", "kitchen"]
  },
  {
    title: "Mountain Cabin Retreat",
    image: "https://images.pexels.com/photos/1568608/pexels-photo-1568608.jpeg",
    price: "$150/night",
    rating: "★ 4.6",
    smoking: true,
    amenities: ["kitchen"]
  },
  {
    title: "Luxury Villa with Pool",
    image: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg",
    price: "$280/night",
    rating: "★ 5.0",
    smoking: false,
    amenities: ["wifi", "pool"]
  }
];

const container = document.getElementById("listings");
const nonSmokingFilter = document.getElementById("nonSmoking");
const amenityFilter = document.getElementById("amenityFilter");
const modal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");

function renderListings() {
  container.innerHTML = "";
  const isNonSmoking = nonSmokingFilter.checked;
  const amenity = amenityFilter.value;

  listings.forEach(rental => {
    if (isNonSmoking && rental.smoking) return;
    if (amenity && !rental.amenities.includes(amenity)) return;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${rental.image}" alt="${rental.title}" />
      <div class="card-content">
        <h3>${rental.title}</h3>
        <div class="price">${rental.price}</div>
        <div class="rating">${rental.rating}</div>
        <p>${rental.smoking ? "Smoking Allowed" : "Non-Smoking"}</p>
        <p>Amenities: ${rental.amenities.join(", ")}</p>
        <button onclick="openModal()">Book Now</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function openModal() {
  modal.classList.remove("hidden");
}
function closeModalFunc() {
  modal.classList.add("hidden");
}

closeModal.addEventListener("click", closeModalFunc);
nonSmokingFilter.addEventListener("change", renderListings);
amenityFilter.addEventListener("change", renderListings);
document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("✅ Booking Confirmed!");
  closeModalFunc();
});

renderListings();
