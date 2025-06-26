// Announcements Data
const announcementsData = {
  announcements: [
    {
      id: 1,
      heading: "Family Reunion 2025",
      content:
        "We are excited to announce our annual family reunion scheduled for July 15, 2025. The event will be held at Riverside Park from 10 AM to 6 PM. Please bring your families and join us for a day filled with games, food, and memories. RSVP by June 30th.",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
      date: "2025-06-26T09:00:00Z",
      timestamp: "2025-06-26T09:00:00Z",
    },
  ],
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = announcementsData;
}
