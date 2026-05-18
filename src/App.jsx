import { useEffect } from "react"
import client from "./sanity"

function App() {
  useEffect(() => {
    client.fetch(`*[_type == "siteSettings"][0]`).then((data) => {
      console.log(data)
    })
  }, [])

  const openWhatsApp = () => {
    window.open("https://wa.me/6287884717585")
  }

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MisuBliss ✨</h2>

        <div style={styles.navLinks}>
          <a href="#home" style={styles.link}>
            Home
          </a>
          <a href="#menu" style={styles.link}>
            Menu
          </a>
          <a href="#about" style={styles.link}>
            About
          </a>
          <a href="#contact" style={styles.link}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={styles.heroSection}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>Premium Homemade Dessert</span>

          <h1 style={styles.heroTitle}>
            Soft & Creamy
            <br />
            Tiramisu Bliss 🍰
          </h1>

          <p style={styles.heroText}>
            Homemade tiramisu with premium ingredients, creamy texture,
            and balanced sweetness perfect for your dessert cravings.
          </p>

          <div style={styles.heroButtons}>
            <button onClick={openWhatsApp} style={styles.primaryButton}>
              Order via WhatsApp
            </button>

            <a href="#menu" style={styles.secondaryButton}>
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Our Best Seller</span>
          <h2 style={styles.sectionTitle}>Our Menu</h2>
        </div>

        <div style={styles.menuGrid}>
          <div style={styles.card}>
            <div style={styles.cardEmoji}>🍮</div>

            <h3 style={styles.cardTitle}>Classic Misu</h3>

            <p style={styles.cardText}>
              Soft & creamy classic tiramisu with premium cocoa.
            </p>

            <h4 style={styles.price}>Rp 24.000</h4>
          </div>

          <div style={styles.card}>
            <div style={styles.cardEmoji}>🍫</div>

            <h3 style={styles.cardTitle}>Choco Misu</h3>

            <p style={styles.cardText}>
              Rich chocolate tiramisu with smooth cocoa topping.
            </p>

            <h4 style={styles.price}>Rp 25.000</h4>
          </div>

          <div style={styles.card}>
            <div style={styles.cardEmoji}>🍵</div>

            <h3 style={styles.cardTitle}>Matcha Misu</h3>

            <p style={styles.cardText}>
              Premium matcha dessert with creamy texture.
            </p>

            <h4 style={styles.price}>Rp 25.000</h4>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutBox}>
          <div style={{ flex: 1 }}>
            <span style={styles.sectionTag}>About MisuBliss</span>

            <h2 style={styles.sectionTitle}>
              Homemade Dessert
              <br />
              from Malang 💕
            </h2>

            <p style={styles.aboutText}>
              MisuBliss is a homemade dessert brand that focuses on
              creamy, soft, and affordable tiramisu made with carefully
              selected ingredients such as cream cheese, whipping cream,
              and premium cocoa powder.
            </p>
          </div>

          <div style={styles.aboutImage}>
            🍰
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.sectionTag}>Customer Love</span>
          <h2 style={styles.sectionTitle}>What They Say</h2>
        </div>

        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <p style={styles.review}>
              “Tiramisunya enak ada asinnya, ada paitnya tapi aku paling suka yang coklat.”
            </p>

            <h4 style={styles.customer}>— Kak Vita</h4>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.review}>
              “Enak kaaa, dimakan adek ku juga enak katanya.”
            </p>

            <h4 style={styles.customer}>— Kak Erin</h4>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.review}>
              “Balance banget, ga enek kemanisan.”
            </p>

            <h4 style={styles.customer}>— Ms Bulan</h4>
          </div>

          <div style={styles.testimonialCard}>
            <p style={styles.review}>
              “Krimnya gak eneg, balance antara coklat bubuk sama krimnya.”
            </p>

            <h4 style={styles.customer}>— Kak Disyah</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={styles.ctaSection}>
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>
            Ready to Taste
            <br />
            MisuBliss? ✨
          </h2>

          <p style={styles.ctaText}>
            Order now via WhatsApp and enjoy your creamy tiramisu today.
          </p>

          <button onClick={openWhatsApp} style={styles.primaryButton}>
            Order Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 MisuBliss. All Rights Reserved.
      </footer>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Inter, sans-serif",
    background: "#FFF9F7",
    color: "#3B2F2F",
    minHeight: "100vh",
  },

  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 8%",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#5C3D2E",
  },

  navLinks: {
    display: "flex",
    gap: "28px",
  },

  link: {
    textDecoration: "none",
    color: "#5C3D2E",
    fontWeight: "500",
    fontSize: "15px",
  },

  heroSection: {
    padding: "100px 8%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  heroContent: {
    textAlign: "center",
    maxWidth: "800px",
  },

  badge: {
    background: "#FFE3EC",
    color: "#D46A92",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "600",
  },

  heroTitle: {
    fontSize: "72px",
    lineHeight: "1.1",
    marginTop: "30px",
    marginBottom: "24px",
    color: "#4A2C2A",
  },

  heroText: {
    fontSize: "20px",
    color: "#7A6A67",
    lineHeight: "1.8",
    maxWidth: "650px",
    margin: "0 auto",
  },

  heroButtons: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryButton: {
    padding: "16px 30px",
    border: "none",
    borderRadius: "16px",
    background: "#5C3D2E",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 25px rgba(92,61,46,0.2)",
  },

  secondaryButton: {
    padding: "16px 30px",
    borderRadius: "16px",
    border: "1px solid #E5D6D0",
    background: "#fff",
    color: "#5C3D2E",
    textDecoration: "none",
    fontWeight: "600",
  },

  section: {
    padding: "90px 8%",
  },

  sectionHeader: {
    textAlign: "center",
    marginBottom: "60px",
  },

  sectionTag: {
    color: "#D46A92",
    fontWeight: "600",
    fontSize: "14px",
  },

  sectionTitle: {
    fontSize: "48px",
    marginTop: "16px",
    color: "#4A2C2A",
  },

  menuGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "28px",
  },

  card: {
    background: "#fff",
    borderRadius: "28px",
    padding: "35px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
    transition: "0.3s",
  },

  cardEmoji: {
    fontSize: "42px",
    marginBottom: "20px",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "12px",
  },

  cardText: {
    color: "#7A6A67",
    lineHeight: "1.7",
  },

  price: {
    marginTop: "24px",
    color: "#D46A92",
    fontSize: "24px",
  },

  aboutSection: {
    padding: "90px 8%",
  },

  aboutBox: {
    background: "#FFEFF5",
    borderRadius: "40px",
    padding: "60px",
    display: "flex",
    gap: "50px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  aboutText: {
    color: "#6F5C58",
    lineHeight: "1.9",
    fontSize: "18px",
    marginTop: "20px",
  },

  aboutImage: {
    width: "220px",
    height: "220px",
    background: "#fff",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "80px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  testimonialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  testimonialCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
  },

  review: {
    lineHeight: "1.8",
    color: "#5F5552",
  },

  customer: {
    marginTop: "20px",
    color: "#D46A92",
  },

  ctaSection: {
    padding: "100px 8%",
  },

  ctaBox: {
    background: "linear-gradient(135deg, #FFDDE8, #FFEFE6)",
    borderRadius: "40px",
    padding: "70px 30px",
    textAlign: "center",
  },

  ctaTitle: {
    fontSize: "54px",
    lineHeight: "1.2",
    color: "#4A2C2A",
  },

  ctaText: {
    marginTop: "20px",
    marginBottom: "35px",
    color: "#6F5C58",
    fontSize: "18px",
  },

  footer: {
    padding: "30px",
    textAlign: "center",
    color: "#7A6A67",
    borderTop: "1px solid rgba(0,0,0,0.05)",
  },
}

export default App