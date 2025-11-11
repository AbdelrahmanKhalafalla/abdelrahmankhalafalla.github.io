export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "white",
        borderTop: "0.5px solid black",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "25px", fontWeight: "bold", fontFamily:"Roboto" }}>
          Abdelrahman Khalafalla, BSc
        </h1>
        <p style={{ fontFamily:"Roboto" }}>Electrical and Electronic Engineer</p>
      </div>

      <div>
        {["Home", "Resume"].map((label) =>
          label === "Resume" ? (
            <a
              key={label}
              href='Abdelrahman Khalafalla Resume.pdf'
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginLeft: "20px",
                color: "black",
                fontSize: "16px",
                fontFamily:"Arial, Helvetica, sans-serif",
                fontWeight:"bold",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {label}
            </a>
          ) : (
            <button
              key={label}
              onClick={() => scrollToSection(label.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                marginLeft: "20px",
                color: "black",
                fontSize: "16px",
                fontFamily:"Arial, Helvetica, sans-serif",
                fontWeight:"bold",
              }}
              onMouseEnter={(e) => (e.target.style.color = "black")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              {label}
            </button>
          )
        )}
      </div>
    </footer>
  );
}
