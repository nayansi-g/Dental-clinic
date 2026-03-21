export const blogPosts = [
  {
    id: 1,
    title: "7 signs you may need a root canal before tooth pain gets worse",
    slug: "signs-you-may-need-a-root-canal",
    author: "Dr. Howard Holmes",
    date: "March 24, 2026",
    image: "/blog1.png",
    excerpt:
      "Persistent tooth pain, swelling, and sensitivity can all point to deeper infection. Learn when a root canal may help save your natural tooth.",
    content:
      "A root canal is often the most effective way to remove infection from deep inside the tooth while preserving its natural structure. If you notice ongoing sensitivity to hot or cold foods, pain while chewing, gum tenderness, or a darkening tooth, it is a good idea to schedule a dental exam quickly. Early diagnosis can reduce discomfort, prevent the infection from spreading, and help you avoid extraction. At Decare Dental Clinic, our dentists use digital imaging and patient-first treatment planning to make root canal care more comfortable and predictable.",
    category: "Restorative Dentistry",
    tags: ["Root Canal", "Tooth Pain", "Dental Health"],
    featured: false,
  },
  {
    id: 2,
    title: "How professional teeth cleaning protects your gums and smile",
    slug: "professional-teeth-cleaning-for-gum-health",
    author: "Dr. Ella Thompson",
    date: "February 10, 2026",
    image: "/blog-2.png",
    excerpt:
      "Routine hygiene appointments do more than polish teeth. They help remove plaque buildup, reduce gum inflammation, and support long-term oral health.",
    content:
      "Professional dental cleaning is a key part of preventive care. Even patients with strong brushing habits can miss plaque around the gumline and in hard-to-reach areas. During a hygiene visit, our team removes tartar, evaluates gum health, and gives practical guidance for home care. Cleanings also help us identify early signs of cavities, gum disease, and enamel wear before they become more serious concerns.",
    category: "Preventive Care",
    tags: ["Oral Hygiene", "Gum Care", "Preventive Dentistry"],
    featured: true,
  },
  {
    id: 3,
    title: "What to expect during your child’s first dental appointment",
    slug: "child-first-dental-appointment-guide",
    author: "Dr. Vincent Cooper",
    date: "January 19, 2026",
    image: "/blog-3.png",
    excerpt:
      "A child’s first visit should feel calm, friendly, and educational. Here is how to prepare and what parents can expect during the appointment.",
    content:
      "A positive first dental visit helps children feel comfortable with oral care from an early age. We focus on gentle introductions, simple explanations, and a welcoming environment that builds trust. During the visit, we check oral development, discuss brushing and diet habits, and answer parent questions about thumb sucking, teething, and cavity prevention. These early visits support lifelong healthy dental routines.",
    category: "Pediatric Dentistry",
    tags: ["Kids Dentist", "Family Dentistry", "Preventive Care"],
    featured: false,
  },
  {
    id: 4,
    title: "Emergency dental care: what to do when you crack a tooth",
    slug: "emergency-dental-care-for-cracked-tooth",
    author: "Dr. Danielle Bryant",
    date: "January 5, 2026",
    image: "/blog1.png",
    excerpt:
      "A cracked tooth should never be ignored. Immediate first steps and fast dental care can reduce pain and improve the chance of saving the tooth.",
    content:
      "If you crack a tooth, rinse your mouth gently with warm water, avoid chewing on that side, and contact your dentist as soon as possible. Depending on the crack, treatment may involve bonding, a crown, root canal therapy, or another restorative option. Fast action matters because even small cracks can expose nerves or allow bacteria to enter the tooth. Our emergency dental team helps patients manage pain quickly and decide on the right treatment path.",
    category: "Emergency Dentistry",
    tags: ["Emergency Care", "Cracked Tooth", "Urgent Dentist"],
    featured: false,
  },
];

export const blogCategories = [
  "Restorative Dentistry",
  "Preventive Care",
  "Pediatric Dentistry",
  "Emergency Dentistry",
];

export const blogTags = [
  "Root Canal",
  "Tooth Pain",
  "Dental Health",
  "Oral Hygiene",
  "Gum Care",
  "Preventive Dentistry",
  "Kids Dentist",
  "Family Dentistry",
  "Emergency Care",
  "Cracked Tooth",
  "Urgent Dentist",
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
