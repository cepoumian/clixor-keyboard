export async function checkout() {
  try {
    const res = await fetch("/api/checkout/vapor75", { method: "POST" });
    const data = await res.json();
    // Redirect to Stripe Checkout with the session URL from the response
    window.location.href = data.url;
  } catch (error) {
    console.error("Error during checkout:", error);
  }
}
