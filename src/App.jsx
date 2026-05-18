
function App() {
  const openWhatsApp = () => {
    window.open("https://wa.me/6287884717585")
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#FFF8F0",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        color: "#6F4E37",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#FFD1DC",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
        }}
      >
        <h2>MisuBliss ✨</h2>

        <div style={{ display: "flex", gap: "20px", color: "#6B4226" }}>
          <a href="#home" style={linkStyle}>
            Home
          </a>

          <a href="#menu" style={linkStyle}>
            Menu
          </a>

          <a href="#about" style={linkStyle}>
            About
          </a>

          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            background: "#FFD1DC",
            padding: "50px",
            borderRadius: "30px",
            textAlign: "center",
            maxWidth: "700px",
            width: "100%",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px",
            }}
          >
            MisuBliss
          </h1>

          <p
            style={{
              fontSize: "22px",
              marginBottom: "30px", color: "#6B4226" 
            }}
          >
            Homemade Tiramisu Dessert with Premium Ingredients ✨
          </p>

          <button
            onClick={openWhatsApp}
            style={{
              padding: "14px 32px",
              borderRadius: "14px",
              border: "none",
              background: "#D2B48C",
              color: "#FFF8F0",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Order Now
          </button>
        </div>
      </section>

      {/* MENU SECTION */}
      <section
        id="menu"
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "40px", color: "#6B4226" }}>
          Our Menu 🍰
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h3>Classic Misu</h3>
            <p>Soft & creamy classic tiramisu</p>
            <h4>24.000</h4>
          </div>

          <div style={cardStyle}>
            <h3>Choco Misu</h3>
            <p>Chocolate tiramisu with cocoa topping</p>
            <h4>25.000</h4>
          </div>

          <div style={cardStyle}>
            <h3>Matcha Misu</h3>
            <p>Premium matcha creamy dessert</p>
            <h4>25.000</h4>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#FFD1DC",
        }}
      >
        <h2 style={{ fontSize: "40px", color: "#6B4226" }}>About Us 💕</h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          MisuBliss is a homemade dessert brand from Malang that serves
          soft, creamy, and affordable tiramisu with carefully selected
          ingredients such as cream cheese, whipping cream, and premium cocoa.
        </p>
      </section>

      {/* TESTIMONIAL */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "40px", color: "#6B4226"
      }}>
          Customer Reviews ⭐
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <div style={testimonialStyle}>
            <p>"Tiramisunya enak ada asinnya, ada paitnya tapi aku paling suka yang coklat"</p>
            <h4>- Customer Kak Vita</h4>
          </div>

<div style={testimonialStyle}>
            <p>"Enak kaaa, dimakan adek ku juga enak katanya</p>
            <h4>- Customer Kak Erin</h4>
          </div>

          <div style={testimonialStyle}>
            <p>"Enak bubuknya kan ga manis yah jadi balance, pas sih di aku, ga yang enek kemanisan gituu</p>
            <h4>- Customer Ms Bulan</h4>
          </div>

          <div style={testimonialStyle}>
            <p>"Krimnya gak eneg, balance antara coklat bubuk sama krimnya"</p>
            <h4>- Customer Kak Disyah</h4>
          </div>

          <div style={testimonialStyle}>
            <p>"Ihhhh aku suka banget sama bagian krimnya yang super creamy. Terus ada bubuk cokelat di atasnya bikin tiramisunya makin enak."</p>
            <h4>- Customer Valentina</h4>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#FFD1DC",
        }}
      >
        <h2 style={{ fontSize: "40px" }}>Order Now 📦</h2>

        <p style={{ marginBottom: "20px" }}>
          Click below to order via WhatsApp
        </p>

        <button
          onClick={openWhatsApp}
          style={{
            padding: "14px 32px",
            borderRadius: "14px",
            border: "none",
            background: "#6F4E37",
            color: "#FFF8F0",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          WhatsApp Order
        </button>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#FFF8F0",
        }}
      >
        © 2026 MisuBliss. All Rights Reserved.
      </footer>
    </div>
  )
}

const linkStyle = {
  textDecoration: "none",
  color: "#6F4E37",
  fontWeight: "bold",
}

const cardStyle = {
  background: "#FFD1DC",
  padding: "30px",
  borderRadius: "20px",
  width: "250px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
}

const testimonialStyle = {
  background: "#FFEFF5",
  padding: "25px",
  borderRadius: "20px",
  width: "250px",
}

export default App