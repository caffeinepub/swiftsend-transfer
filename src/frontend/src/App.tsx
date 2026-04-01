import { useState } from "react";

type SpeedMode = "fast" | "standard";

export default function App() {
  const [amount, setAmount] = useState<number>(255.91);
  const [selected, setSelected] = useState<SpeedMode>("fast");

  const handleClear = () => setAmount(0);

  const handleContinue = () => {
    const mode =
      selected === "fast"
        ? "Fast transfer (1.75% fee)"
        : "Standard transfer (Free)";
    alert(`${mode}\nAmount: $${amount.toFixed(2)}`);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#F5F6F8",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    } as React.CSSProperties,
    phone: {
      width: "100%",
      maxWidth: "430px",
      minHeight: "100vh",
      background: "#FFFFFF",
      position: "relative" as const,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column" as const,
    } as React.CSSProperties,
    statusBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px 0",
      fontSize: "15px",
      fontWeight: 600,
      color: "#111111",
    } as React.CSSProperties,
    statusRight: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      fontWeight: 700,
    } as React.CSSProperties,
    battery: {
      background: "#F2C94C",
      padding: "2px 7px",
      borderRadius: "7px",
      lineHeight: "1.4",
      fontSize: "12px",
    } as React.CSSProperties,
    topbar: {
      position: "relative" as const,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px 18px 0",
      minHeight: "56px",
    } as React.CSSProperties,
    closeBtn: {
      position: "absolute" as const,
      left: "18px",
      top: "14px",
      width: "32px",
      height: "32px",
      border: "none",
      background: "transparent",
      fontSize: "28px",
      lineHeight: "32px",
      color: "#111111",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,
    titleText: {
      fontSize: "20px",
      fontWeight: 500,
      letterSpacing: "-0.02em",
      color: "#111111",
    } as React.CSSProperties,
    content: {
      padding: "52px 22px 24px",
      textAlign: "center" as const,
      flex: 1,
      display: "flex",
      flexDirection: "column" as const,
    } as React.CSSProperties,
    amountRow: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      justifyContent: "center",
      marginBottom: "14px",
    } as React.CSSProperties,
    amountText: {
      fontSize: "clamp(64px, 16vw, 76px)",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.05em",
      color: "#111111",
    } as React.CSSProperties,
    clearBtn: {
      width: "26px",
      height: "26px",
      borderRadius: "50%",
      border: "none",
      background: "#7F7F7F",
      color: "#FFFFFF",
      fontSize: "16px",
      lineHeight: "26px",
      cursor: "pointer",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
    } as React.CSSProperties,
    balance: {
      fontSize: "17px",
      color: "#666666",
      marginTop: "8px",
    } as React.CSSProperties,
    currency: {
      marginTop: "28px",
      color: "#1F6FBF",
      fontSize: "19px",
      fontWeight: 700,
      letterSpacing: "0.02em",
    } as React.CSSProperties,
    spacer: {
      flex: 1,
      minHeight: "40px",
    } as React.CSSProperties,
    speedTitle: {
      textAlign: "center" as const,
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "-0.02em",
      marginBottom: "18px",
      color: "#111111",
    } as React.CSSProperties,
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      padding: "0 0 28px",
    } as React.CSSProperties,
    card: (isSelected: boolean): React.CSSProperties => ({
      background: "#FFFFFF",
      border: `1px solid ${isSelected ? "rgba(31,111,191,0.16)" : "#EFEFEF"}`,
      borderRadius: "18px",
      boxShadow: isSelected
        ? "0 10px 28px rgba(31,111,191,0.10), 0 8px 24px rgba(0,0,0,0.08)"
        : "0 8px 24px rgba(0,0,0,0.08)",
      outline: isSelected ? "2px solid rgba(31,111,191,0.16)" : "none",
      padding: "22px 14px 18px",
      minHeight: "190px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      cursor: "pointer",
      transition: "box-shadow 0.2s",
    }),
    icon: {
      fontSize: "54px",
      lineHeight: 1,
      marginBottom: "18px",
      userSelect: "none" as const,
    } as React.CSSProperties,
    cardLabel: {
      fontSize: "22px",
      fontWeight: 500,
      marginBottom: "18px",
      letterSpacing: "-0.02em",
      color: "#111111",
    } as React.CSSProperties,
    cardSubtext: {
      fontSize: "16px",
      color: "#222222",
    } as React.CSSProperties,
    footer: {
      padding: "0 0 26px",
    } as React.CSSProperties,
    continueBtn: {
      width: "100%",
      border: "none",
      borderRadius: "16px",
      padding: "16px",
      background: "#111111",
      color: "#FFFFFF",
      fontSize: "17px",
      fontWeight: 700,
      cursor: "pointer",
      transition: "transform 0.1s",
    } as React.CSSProperties,
  };

  return (
    <div style={styles.page}>
      <main style={styles.phone}>
        {/* Status Bar */}
        <div style={styles.statusBar}>
          <div>8:07</div>
          <div style={styles.statusRight}>
            <span>LTE</span>
            <span style={styles.battery}>88</span>
          </div>
        </div>

        {/* Top Bar */}
        <div style={styles.topbar}>
          <button
            style={styles.closeBtn}
            aria-label="Close"
            type="button"
            data-ocid="transfer.close_button"
            onClick={() => {}}
          >
            ×
          </button>
          <span style={styles.titleText}>Transfer amount</span>
        </div>

        {/* Main Content */}
        <section style={styles.content}>
          <div style={styles.amountRow}>
            <span style={styles.amountText} data-ocid="transfer.panel">
              ${amount.toFixed(2)}
            </span>
            <button
              style={styles.clearBtn}
              aria-label="Clear amount"
              type="button"
              data-ocid="transfer.delete_button"
              onClick={handleClear}
            >
              ×
            </button>
          </div>

          <div style={styles.balance}>Available balance: $90,562,688</div>
          <div style={styles.currency}>USD</div>

          <div style={styles.spacer} />

          <div style={styles.speedTitle}>CHOOSE YOUR SPEED:</div>

          <fieldset
            style={{
              border: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <legend style={{ display: "none" }}>Transfer speed</legend>
            <div style={styles.cardsGrid}>
              {/* Fast card */}
              <label
                style={styles.card(selected === "fast")}
                data-ocid="transfer.item.1"
              >
                <input
                  type="radio"
                  name="speed"
                  value="fast"
                  checked={selected === "fast"}
                  onChange={() => setSelected("fast")}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                <div style={styles.icon}>🚀</div>
                <div style={styles.cardLabel}>in minutes</div>
                <div style={styles.cardSubtext}>1.75% fee</div>
              </label>

              {/* Standard card */}
              <label
                style={styles.card(selected === "standard")}
                data-ocid="transfer.item.2"
              >
                <input
                  type="radio"
                  name="speed"
                  value="standard"
                  checked={selected === "standard"}
                  onChange={() => setSelected("standard")}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: 0,
                    height: 0,
                  }}
                />
                <div style={styles.icon}>🎈</div>
                <div style={styles.cardLabel}>in 1–3 days</div>
                <div style={styles.cardSubtext}>Free</div>
              </label>
            </div>
          </fieldset>

          {/* Continue Button */}
          <div style={styles.footer}>
            <button
              style={styles.continueBtn}
              onClick={handleContinue}
              type="button"
              data-ocid="transfer.submit_button"
              onMouseDown={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(0.99)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)";
              }}
            >
              Continue
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "0 16px 20px",
            fontSize: "12px",
            color: "#999999",
          }}
        >
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            style={{ color: "#999999", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            Built with ♥ using caffeine.ai
          </a>
        </footer>
      </main>
    </div>
  );
}
