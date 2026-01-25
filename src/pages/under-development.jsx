const UnderDevelopment = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: `"Source Code Pro", monospace`,
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Arabic Version Coming Soon
      </h2>
      <p style={{ fontSize: "18px", opacity: 0.8 }}>
        This page is currently under development.
      </p>
    </div>
  );
};

export default UnderDevelopment;
