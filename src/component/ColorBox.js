export const ColorBox = ({ idName, colorName, bgColor }) => {
  return (
    <>
      <div
        style={{
          width: "190px",
          height: "230px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: `rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`,
        }}
      >
        <div style={{ width: "100%", height: "75%", backgroundColor: bgColor }}>
          <p
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "5px",
            }}
          >
            <span
              style={{
                width: "2.5rem",
                display: "flex",
                justifyContent: "center",
                background: "linear-gradient(45deg, black, transparent)",
                borderRadius: "4px",
                color: "white",
              }}
            >
              #{idName}
            </span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2px 10px",
          }}
        >
          <span id="hexCode">{bgColor}</span>
          <span style={{ color: bgColor, fontVariant: "small-caps" }}>
            {colorName.toLowerCase()}
          </span>
        </div>
      </div>
    </>
  );
};

// export default ColorBox;
