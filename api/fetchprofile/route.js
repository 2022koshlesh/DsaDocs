// pages/api/profile.js

export default async function handler(req, res) {
  try {
    const response = await fetch("https://codolio.com/profile/KoshleshRaj", {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0", // Sometimes required by servers
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data." });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
