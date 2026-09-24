window.__ModuleLoader__.load({
  id: "dsh-web-mobile-fix",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var CSS = [
      "@keyframes dsh-fade-in {",
      "  from {",
      "    opacity: 0;",
      "  }",
      "  to {",
      "    opacity: 1;",
      "  }",
      "}",
      "/* ── mobile entrance animations ── */",
      "@keyframes dsh-bubble-rise-in {",
      "  from {",
      "    opacity: 0;",
      "    transform: translateY(14px);",
      "  }",
      "  to {",
      "    opacity: 1;",
      "    transform: translateY(0);",
      "  }",
      "}",
      "@keyframes dsh-composer-rise-in {",
      "  from {",
      "    opacity: 0;",
      "    transform: translateY(18px);",
      "  }",
      "  to {",
      "    opacity: 1;",
      "    transform: translateY(0);",
      "  }",
      "}",
      "@keyframes dsh-btn-pop-in {",
      "  from {",
      "    opacity: 0;",
      "    transform: scale(0.82);",
      "  }",
      "  to {",
      "    opacity: 1;",
      "    transform: scale(1);",
      "  }",
      "}",
      "/* ── mobile UI fixes (≤700px) ── */",
      "@media (max-width: 700px) {",
      "  /* 1. Settings panel: stacked full-screen layout */",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] {",
      "    flex-direction: column !important;",
      "    width: 100vw !important;",
      "    max-width: 100vw !important;",
      "    height: 100vh !important;",
      "    height: 100dvh !important;",
      "    max-height: 100vh !important;",
      "    max-height: 100dvh !important;",
      "    border-radius: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav {",
      "    flex: none !important;",
      "    flex-direction: column !important;",
      "    width: 100% !important;",
      "    box-sizing: border-box !important;",
      "    padding: 12px 12px 6px !important;",
      "    gap: 8px !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav > div:last-child {",
      "    flex-direction: row !important;",
      "    flex-wrap: nowrap !important;",
      "    gap: 6px !important;",
      "    overflow-x: auto !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button {",
      "    flex: 0 0 auto !important;",
      "    height: 36px !important;",
      "    padding: 6px 12px !important;",
      "    gap: 6px !important;",
      "    justify-content: center !important;",
      "  }",
      "  /* Keep every tab label visible: the stock label is flex:1 with",
      "        flex-basis 0, which collapses to zero width inside a content-sized",
      "        button; let the text drive the button width instead (0 1 auto). */",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button > :last-child {",
      "    flex: 0 1 auto !important;",
      "    min-width: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav button[aria-current=\"true\"] {",
      "    background: var(--dsw-specific-sidebar-nav-item-active, #e8ebf1) !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div {",
      "    flex: 1 1 0 !important;",
      "    min-height: 0 !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div > div:first-child {",
      "    padding: 12px 12px 6px !important;",
      "  }",
      "  [role=\"dialog\"][aria-modal=\"true\"][aria-labelledby] > nav + div > div:last-child {",
      "    padding: 0 16px 16px !important;",
      "  }",
      "  /* 2. Composer bar: keep all tools and actions on a single row without wrapping */",
      "  [data-composer-seat], [data-slot=\"conversation.composer.bar\"] {",
      "    --dsh-composer-side-clearance: 8px !important;",
      "  }",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_row\"] {",
      "    flex-wrap: nowrap !important;",
      "    gap: 6px !important;",
      "    padding: 2px 6px 6px !important;",
      "    align-items: center !important;",
      "  }",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_tools\"],",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_modes\"],",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_trailing\"] {",
      "    gap: 6px !important;",
      "  }",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_tools\"] {",
      "    min-width: 0 !important;",
      "    flex-shrink: 1 !important;",
      "  }",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_trailing\"] {",
      "    flex-shrink: 0 !important;",
      "  }",
      "  [data-slot=\"conversation.composer.bar\"] [class*=\"_select\"] {",
      "    max-width: 96px !important;",
      "    padding: 0 16px 0 4px !important;",
      "    text-overflow: ellipsis !important;",
      "  }",
      "  [data-slot=\"conversation.input.model\"] > div > button {",
      "    max-width: 120px !important;",
      "    padding: 0 4px !important;",
      "    gap: 2px !important;",
      "  }",
      "  [data-slot=\"conversation.input.model\"] > div > button > span {",
      "    overflow: hidden !important;",
      "    text-overflow: ellipsis !important;",
      "    white-space: nowrap !important;",
      "  }",
      "  /* Grid column stability on mobile screens */",
      "  [class*=\"_sidebarCol\"] {",
      "    grid-column: 1 !important;",
      "  }",
      "  [class*=\"_centerCol\"] {",
      "    grid-column: 2 !important;",
      "  }",
      "  /* 3. Expanded sidebar on narrow screens: take 100% full width and collapse center */",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) {",
      "    grid-template-columns: 100% 0px 0px !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_sidebarCol\"] {",
      "    width: 100% !important;",
      "    min-width: 100% !important;",
      "    max-width: 100% !important;",
      "    overflow: hidden !important;",
      "    z-index: 60 !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_centerCol\"] {",
      "    width: 0 !important;",
      "    min-width: 0 !important;",
      "    max-width: 0 !important;",
      "    overflow: hidden !important;",
      "    visibility: hidden !important;",
      "    opacity: 0 !important;",
      "    pointer-events: none !important;",
      "  }",
      "}",
      "",
      "/* ── overlay floating chat mode ── */",
      "html[data-dsh-overlay=\"true\"],",
      "html[data-dsh-overlay=\"true\"] body,",
      "html[data-dsh-overlay=\"true\"] #root {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "}",
      "/* Grid column stability in overlay: explicit column assignment prevents auto-placement shifting */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_sidebarCol\"] {",
      "  grid-column: 1 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_centerCol\"] {",
      "  grid-column: 2 !important;",
      "}",
      "/* Collapsed sidebar rail in overlay: completely hide the 56px black rail while keeping column 1 anchor */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"][data-sidebar-collapsed] {",
      "  grid-template-columns: 0px minmax(0, 1fr) 0px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"][data-sidebar-collapsed] [class*=\"_sidebarCol\"] {",
      "  width: 0 !important;",
      "  min-width: 0 !important;",
      "  max-width: 0 !important;",
      "  overflow: hidden !important;",
      "  padding: 0 !important;",
      "  margin: 0 !important;",
      "  border: none !important;",
      "  visibility: hidden !important;",
      "  opacity: 0 !important;",
      "  pointer-events: none !important;",
      "}",
      "/* Expanded sidebar in overlay: take 100% full screen with solid frosted backdrop */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"]:not([data-sidebar-collapsed]) {",
      "  grid-template-columns: 100% 0px 0px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_sidebarCol\"] {",
      "  width: 100% !important;",
      "  min-width: 100% !important;",
      "  max-width: 100% !important;",
      "  overflow: hidden !important;",
      "  background: rgba(22, 25, 33, 0.98) !important;",
      "  backdrop-filter: blur(28px) !important;",
      "  -webkit-backdrop-filter: blur(28px) !important;",
      "  padding-top: max(48px, env(safe-area-inset-top, 48px)) !important;",
      "  box-sizing: border-box !important;",
      "  z-index: 60 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_centerCol\"] {",
      "  width: 0 !important;",
      "  min-width: 0 !important;",
      "  max-width: 0 !important;",
      "  overflow: hidden !important;",
      "  visibility: hidden !important;",
      "  opacity: 0 !important;",
      "  pointer-events: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_rightbarCol\"],",
      "html[data-dsh-overlay=\"true\"] [class*=\"_handle\"] {",
      "  display: none !important;",
      "  width: 0 !important;",
      "}",
      "/* Floating black whale button at top-left */",
      ".dsh-overlay-whale-btn {",
      "  position: fixed !important;",
      "  top: max(38px, env(safe-area-inset-top, 38px)) !important;",
      "  left: 14px !important;",
      "  width: 40px !important;",
      "  height: 40px !important;",
      "  border-radius: 50% !important;",
      "  background: rgba(255, 255, 255, 0.92) !important;",
      "  backdrop-filter: blur(16px) !important;",
      "  -webkit-backdrop-filter: blur(16px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.5) !important;",
      "  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  justify-content: center !important;",
      "  cursor: pointer !important;",
      "  z-index: 120 !important;",
      "  padding: 0 !important;",
      "  outline: none !important;",
      "  animation: dsh-btn-pop-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "  transition: transform 0.15s ease, background-color 0.15s ease !important;",
      "}",
      ".dsh-overlay-whale-btn:active {",
      "  transform: scale(0.92) !important;",
      "}",
      ".dsh-overlay-whale-btn img {",
      "  width: 26px !important;",
      "  height: 26px !important;",
      "  display: block !important;",
      "  pointer-events: none !important;",
      "}",
      "/* Floating close button at top-right */",
      ".dsh-overlay-close-btn {",
      "  position: fixed !important;",
      "  top: max(38px, env(safe-area-inset-top, 38px)) !important;",
      "  right: 14px !important;",
      "  width: 40px !important;",
      "  height: 40px !important;",
      "  border-radius: 50% !important;",
      "  background: rgba(255, 255, 255, 0.92) !important;",
      "  backdrop-filter: blur(16px) !important;",
      "  -webkit-backdrop-filter: blur(16px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.5) !important;",
      "  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  justify-content: center !important;",
      "  cursor: pointer !important;",
      "  z-index: 120 !important;",
      "  padding: 0 !important;",
      "  outline: none !important;",
      "  animation: dsh-btn-pop-in 0.28s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "  transition: transform 0.15s ease, background-color 0.15s ease !important;",
      "}",
      ".dsh-overlay-close-btn:active {",
      "  transform: scale(0.92) !important;",
      "}",
      ".dsh-overlay-close-btn svg {",
      "  width: 18px !important;",
      "  height: 18px !important;",
      "  stroke: #1C1F26 !important;",
      "  stroke-width: 2.4 !important;",
      "  stroke-linecap: round !important;",
      "  display: block !important;",
      "  pointer-events: none !important;",
      "}",
      "/* Floating home (new session) button right below close button */",
      ".dsh-overlay-home-btn {",
      "  position: fixed !important;",
      "  top: calc(max(38px, env(safe-area-inset-top, 38px)) + 48px) !important;",
      "  right: 14px !important;",
      "  width: 40px !important;",
      "  height: 40px !important;",
      "  border-radius: 50% !important;",
      "  background: rgba(255, 255, 255, 0.92) !important;",
      "  backdrop-filter: blur(16px) !important;",
      "  -webkit-backdrop-filter: blur(16px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.5) !important;",
      "  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25) !important;",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  justify-content: center !important;",
      "  cursor: pointer !important;",
      "  z-index: 120 !important;",
      "  padding: 0 !important;",
      "  outline: none !important;",
      "  animation: dsh-btn-pop-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "  transition: transform 0.15s ease, background-color 0.15s ease !important;",
      "}",
      ".dsh-overlay-home-btn:active {",
      "  transform: scale(0.92) !important;",
      "}",
      ".dsh-overlay-home-btn svg {",
      "  width: 19px !important;",
      "  height: 19px !important;",
      "  stroke: #1C1F26 !important;",
      "  stroke-width: 2.2 !important;",
      "  stroke-linecap: round !important;",
      "  stroke-linejoin: round !important;",
      "  display: block !important;",
      "  pointer-events: none !important;",
      "}",
      "/* Floating Back-to-Chat Button in Overlay when viewing Trajectory */",
      ".dsh-overlay-back-chat-btn {",
      "  position: fixed !important;",
      "  top: max(38px, env(safe-area-inset-top, 38px)) !important;",
      "  left: 64px !important;",
      "  height: 40px !important;",
      "  border-radius: 20px !important;",
      "  background: rgba(30, 34, 44, 0.94) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.2) !important;",
      "  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35) !important;",
      "  display: none !important;",
      "  align-items: center !important;",
      "  gap: 6px !important;",
      "  padding: 0 14px 0 10px !important;",
      "  cursor: pointer !important;",
      "  z-index: 125 !important;",
      "  outline: none !important;",
      "  color: #FFFFFF !important;",
      "  font-size: 13px !important;",
      "  font-weight: 500 !important;",
      "  animation: dsh-btn-pop-in 0.24s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "  transition: transform 0.15s ease, background-color 0.15s ease !important;",
      "}",
      ".dsh-overlay-back-chat-btn:active {",
      "  transform: scale(0.94) !important;",
      "  background: rgba(255, 255, 255, 0.22) !important;",
      "}",
      ".dsh-overlay-back-chat-btn svg {",
      "  width: 16px !important;",
      "  height: 16px !important;",
      "  stroke: #07C160 !important;",
      "  stroke-width: 2.4 !important;",
      "  stroke-linecap: round !important;",
      "  stroke-linejoin: round !important;",
      "  display: block !important;",
      "  pointer-events: none !important;",
      "}",
      "/* When Trajectory View or Plugin Panel is visible, automatically show the Back-to-Chat button! */",
      "html[data-dsh-overlay=\"true\"]:has([data-trajectory-scroll]) .dsh-overlay-back-chat-btn,",
      "html[data-dsh-overlay=\"true\"]:has([data-conversation-composer-overlay]) .dsh-overlay-back-chat-btn,",
      "html[data-dsh-overlay=\"true\"]:has([data-plugin-panel]) .dsh-overlay-back-chat-btn {",
      "  display: inline-flex !important;",
      "}",
      "/* Plugin Manager Page in Overlay Mode: elegant dark base surface */",
      "html[data-dsh-overlay=\"true\"] [data-plugin-panel] {",
      "  background: rgba(18, 20, 26, 0.98) !important;",
      "  backdrop-filter: blur(28px) !important;",
      "  -webkit-backdrop-filter: blur(28px) !important;",
      "  min-height: 100vh !important;",
      "  min-height: 100dvh !important;",
      "  box-sizing: border-box !important;",
      "  padding-top: calc(max(38px, env(safe-area-inset-top, 38px)) + 52px) !important;",
      "  padding-bottom: max(32px, env(safe-area-inset-bottom, 32px)) !important;",
      "  padding-left: clamp(16px, 4vw, 32px) !important;",
      "  padding-right: clamp(16px, 4vw, 32px) !important;",
      "  position: relative !important;",
      "  z-index: 50 !important;",
      "  overflow-y: auto !important;",
      "}",
      "/* Card list item: only style the top-level <li> cards, NEVER inner elements */",
      "html[data-dsh-overlay=\"true\"] [data-plugin-panel] ul[class*=\"_cards\"] > li {",
      "  background: rgba(255, 255, 255, 0.04) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.08) !important;",
      "  border-radius: 14px !important;",
      "  margin: 6px 0 !important;",
      "  padding: 4px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-plugin-panel] ul[class*=\"_cards\"] > li:active {",
      "  background: rgba(255, 255, 255, 0.08) !important;",
      "}",
      "/* Detail page container */",
      "html[data-dsh-overlay=\"true\"] [data-plugin-panel] > div[class*=\"_detail\"] {",
      "  background: rgba(255, 255, 255, 0.03) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.08) !important;",
      "  border-radius: 16px !important;",
      "  padding: 16px !important;",
      "}",
      "/* Hide inspectButton on tool cards in overlay mode to prevent accidental jumps */",
      "html[data-dsh-overlay=\"true\"] button[class*=\"inspectButton\"],",
      "html[data-dsh-overlay=\"true\"] [class*=\"inspectButton\"] {",
      "  display: none !important;",
      "  pointer-events: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_centerCol\"] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "  width: 100% !important;",
      "  flex: 1 1 auto !important;",
      "  min-width: 0 !important;",
      "  animation: dsh-fade-in 0.28s ease-out !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_boot\"] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_root\"][data-phase] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "}",
      "/* Hide top conversation header and its 0.5px bottom divider in overlay */",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.header\"],",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.session.header\"],",
      "html[data-dsh-overlay=\"true\"] header[class*=\"_header\"] {",
      "  display: none !important;",
      "  height: 0 !important;",
      "  min-height: 0 !important;",
      "  border: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_tabs\"] {",
      "  display: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_widthHandle\"] {",
      "  display: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_scrollBody\"] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "  scrollbar-width: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_scrollBody\"]::-webkit-scrollbar,",
      "html[data-dsh-overlay=\"true\"] [class*=\"_scroll\"]::-webkit-scrollbar {",
      "  display: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_scroll\"] {",
      "  background: transparent !important;",
      "  background-color: transparent !important;",
      "  scrollbar-width: none !important;",
      "}",
      "/* Hero empty state: hide fish & headline, preserve workspace pill container */",
      "html[data-dsh-overlay=\"true\"] [class*=\"pXSMma_root\"] {",
      "  display: none !important;",
      "}",
      "/* Floating Workspace Chip Container */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_heroWorkspaceRow\"] {",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  justify-content: flex-start !important;",
      "  margin-bottom: 8px !important;",
      "  padding: 0 4px !important;",
      "  width: 100% !important;",
      "  pointer-events: auto !important;",
      "  animation: dsh-bubble-rise-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_heroWorkspaceRow\"] button,",
      "html[data-dsh-overlay=\"true\"] [class*=\"_heroWorkspaceRow\"] [class*=\"_workspace\"] {",
      "  background: rgba(30, 34, 44, 0.88) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.14) !important;",
      "  border-radius: 20px !important;",
      "  padding: 6px 14px !important;",
      "  color: #F0F2F5 !important;",
      "  font-size: 13px !important;",
      "  font-weight: 500 !important;",
      "  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3) !important;",
      "  display: inline-flex !important;",
      "  align-items: center !important;",
      "  gap: 6px !important;",
      "  cursor: pointer !important;",
      "  outline: none !important;",
      "  transition: background-color 0.15s ease, transform 0.1s ease !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_heroWorkspaceRow\"] button:active {",
      "  transform: scale(0.96) !important;",
      "}",
      "/* Floating Todo Panel Container */",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.dock\"] {",
      "  width: 100% !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.dock\"] [class*=\"_root\"] {",
      "  background: rgba(26, 30, 38, 0.94) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
      "  border-radius: 16px !important;",
      "  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35) !important;",
      "  margin-bottom: 8px !important;",
      "  width: 100% !important;",
      "  max-width: 100% !important;",
      "  box-sizing: border-box !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.dock\"] [class*=\"_header\"] {",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.dock\"] [class*=\"_item\"] {",
      "  color: #D1D5DB !important;",
      "}",
      "/* Hide empty QueueDock ghost line/panel */",
      "html[data-dsh-overlay=\"true\"] [data-queue-dock]:not(:has(li)),",
      "html[data-dsh-overlay=\"true\"] [data-queue-dock]:empty,",
      "html[data-dsh-overlay=\"true\"] [data-queue-dock] [class*=\"_panel\"]:not(:has(li)),",
      "html[data-dsh-overlay=\"true\"] [class*=\"_dock\"]:not(:has(li)):empty {",
      "  display: none !important;",
      "  height: 0 !important;",
      "  margin: 0 !important;",
      "  padding: 0 !important;",
      "  border: none !important;",
      "}",
      "/* Work Mode, Plan Mode & Model selector buttons */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_modes\"] button,",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.plan\"] button,",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.permission\"] button,",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.model\"] button {",
      "  background: rgba(255, 255, 255, 0.08) !important;",
      "  border: 0.5px solid rgba(255, 255, 255, 0.14) !important;",
      "  border-radius: 14px !important;",
      "  color: #E2E6EE !important;",
      "  padding: 4px 10px !important;",
      "  font-size: 12px !important;",
      "  display: inline-flex !important;",
      "  align-items: center !important;",
      "  gap: 4px !important;",
      "  cursor: pointer !important;",
      "  transition: background-color 0.15s ease, transform 0.1s ease !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_modes\"] button:active,",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.plan\"] button:active,",
      "html[data-dsh-overlay=\"true\"] [data-slot=\"conversation.input.model\"] button:active {",
      "  transform: scale(0.95) !important;",
      "  background: rgba(255, 255, 255, 0.18) !important;",
      "}",
      "/* Menus, Popovers, Dropdowns, and Dialogs: Solid frosted container */",
      "html[data-dsh-overlay=\"true\"] [role=\"menu\"],",
      "html[data-dsh-overlay=\"true\"] [role=\"listbox\"],",
      "html[data-dsh-overlay=\"true\"] [role=\"dialog\"],",
      "html[data-dsh-overlay=\"true\"] [data-dockkit-tab-menu],",
      "[data-floating-ui-portal] [role=\"menu\"],",
      "[data-floating-ui-portal] [role=\"listbox\"],",
      "[data-floating-ui-portal] [role=\"dialog\"] {",
      "  background: rgba(24, 28, 36, 0.98) !important;",
      "  backdrop-filter: blur(24px) !important;",
      "  -webkit-backdrop-filter: blur(24px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.16) !important;",
      "  border-radius: 16px !important;",
      "  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.55) !important;",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [role=\"menuitem\"],",
      "html[data-dsh-overlay=\"true\"] [role=\"option\"],",
      "[data-floating-ui-portal] [role=\"menuitem\"],",
      "[data-floating-ui-portal] [role=\"option\"] {",
      "  color: #E2E6EE !important;",
      "  border-radius: 8px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [role=\"menuitem\"]:hover,",
      "html[data-dsh-overlay=\"true\"] [role=\"menuitem\"][data-highlighted],",
      "[data-floating-ui-portal] [role=\"menuitem\"]:hover,",
      "[data-floating-ui-portal] [role=\"menuitem\"][data-highlighted] {",
      "  background: rgba(255, 255, 255, 0.12) !important;",
      "  color: #FFFFFF !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_root\"][data-phase=\"hero\"] [class*=\"_scrollBody\"] {",
      "  justify-content: flex-end !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_composerHero\"] {",
      "  align-self: stretch !important;",
      "  padding-bottom: max(14px, env(safe-area-inset-bottom, 14px)) !important;",
      "  width: 100% !important;",
      "  animation: dsh-composer-rise-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "}",
      "/* Floating bottom composer (sticky over transparent scrollbody) */",
      "html[data-dsh-overlay=\"true\"] [data-phase=\"active\"] [data-composer-seat],",
      "html[data-dsh-overlay=\"true\"] [class*=\"_composerSeat\"] {",
      "  background: none !important;",
      "  background-color: transparent !important;",
      "  position: sticky !important;",
      "  bottom: 0 !important;",
      "  z-index: 10 !important;",
      "  padding: 0 12px max(14px, env(safe-area-inset-bottom, 14px)) !important;",
      "  animation: dsh-composer-rise-in 0.32s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_viewArea\"] {",
      "  padding-bottom: 24px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_card\"][data-composer-card],",
      "html[data-dsh-overlay=\"true\"] [data-composer-seat] [class*=\"_card\"] {",
      "  background: rgba(28, 31, 38, 0.92) !important;",
      "  backdrop-filter: blur(24px) !important;",
      "  -webkit-backdrop-filter: blur(24px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
      "  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45) !important;",
      "  border-radius: 24px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [class*=\"_toBottomSlot\"] {",
      "  display: none !important;",
      "}",
      "/* Turn navigation rail & turn jump marks: completely hidden in mobile overlay mode */",
      "html[data-dsh-overlay=\"true\"] nav[aria-label*=\"导航\"],",
      "html[data-dsh-overlay=\"true\"] nav[aria-label*=\"navigation\" i],",
      "html[data-dsh-overlay=\"true\"] [class*=\"_slot\"]:has(> nav[aria-label*=\"导航\"]),",
      "html[data-dsh-overlay=\"true\"] [class*=\"_slot\"]:has(> nav[aria-label*=\"navigation\" i]) {",
      "  display: none !important;",
      "  pointer-events: none !important;",
      "}",
      "/* Ask Question & Plan Review Cards in Overlay */",
      "html[data-dsh-overlay=\"true\"] [data-question-key],",
      "html[data-dsh-overlay=\"true\"] [data-plan-review-key] {",
      "  width: 100% !important;",
      "  max-width: 100% !important;",
      "  padding: 0 0 6px !important;",
      "  animation: dsh-bubble-rise-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_card\"],",
      "html[data-dsh-overlay=\"true\"] [data-plan-review-key] [class*=\"_card\"] {",
      "  background: rgba(26, 30, 38, 0.96) !important;",
      "  backdrop-filter: blur(24px) !important;",
      "  -webkit-backdrop-filter: blur(24px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.16) !important;",
      "  border-radius: 20px !important;",
      "  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.55) !important;",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_option\"] {",
      "  background: rgba(255, 255, 255, 0.06) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.1) !important;",
      "  border-radius: 12px !important;",
      "  color: #E2E6EE !important;",
      "  transition: background-color 0.15s ease, border-color 0.15s ease !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_optionSelected\"],",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_option\"][aria-checked=\"true\"] {",
      "  background: rgba(7, 193, 96, 0.2) !important;",
      "  border-color: #07C160 !important;",
      "  color: #FFFFFF !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_customRow\"] {",
      "  background: rgba(255, 255, 255, 0.05) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.1) !important;",
      "  border-radius: 12px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_customRowActive\"] {",
      "  background: rgba(7, 193, 96, 0.12) !important;",
      "  border-color: #07C160 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_fieldInput\"] {",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-question-key] [class*=\"_footer\"] button[class*=\"_primary\"],",
      "html[data-dsh-overlay=\"true\"] [data-plan-review-key] button[class*=\"_primary\"] {",
      "  background: #07C160 !important;",
      "  color: #FFFFFF !important;",
      "}",
      "/* Chat Flow Item entrance (Bubbles, tool calls, thinking, status) */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind] {",
      "  animation: dsh-bubble-rise-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;",
      "}",
      "/* AI Message Flow Item & Bubble (WeChat style) */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] {",
      "  display: flex !important;",
      "  flex-direction: column !important;",
      "  align-items: flex-start !important;",
      "  width: 100% !important;",
      "  margin-top: 6px !important;",
      "  margin-bottom: 6px !important;",
      "  min-width: 0 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [data-slot=\"conversation.chat.node\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] > [data-slot] {",
      "  display: contents !important;",
      "}",
      "/* AI Bubble Container: target the AssistantMarkdown root */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [data-slot=\"conversation.chat.node\"] > [class*=\"_root\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] > [data-slot] > [class*=\"_root\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] > div > [class*=\"_root\"] {",
      "  background: rgba(34, 38, 46, 0.94) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  color: #F0F2F5 !important;",
      "  border-radius: 18px 18px 18px 4px !important;",
      "  padding: 10px 14px !important;",
      "  width: fit-content !important;",
      "  max-width: 88% !important;",
      "  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.3) !important;",
      "  border: 0.5px solid rgba(255, 255, 255, 0.1) !important;",
      "  overflow-wrap: anywhere !important;",
      "  word-break: break-word !important;",
      "  box-sizing: border-box !important;",
      "}",
      "/* When inside a collapsed turn-process, hide the process member completely so no hollow artifacts appear */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"][data-turn-process-hidden] {",
      "  display: none !important;",
      "}",
      "/* If assistant-step contains ONLY a thinking block (no dialogue text), strip the giant bubble wrapping so it becomes a sleek pill */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_root\"]:has(> [class*=\"_body\"] > [data-variant=\"think\"]:only-child),",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_root\"]:has(> [class*=\"_body\"] > div:only-child > [data-variant=\"think\"]:only-child) {",
      "  background: transparent !important;",
      "  backdrop-filter: none !important;",
      "  -webkit-backdrop-filter: none !important;",
      "  border: none !important;",
      "  box-shadow: none !important;",
      "  padding: 0 !important;",
      "  width: 100% !important;",
      "  max-width: 100% !important;",
      "}",
      "/* Standalone Reasoning / Think Row: floating frosted pill capsule matching tool calls */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] {",
      "  background: rgba(30, 34, 42, 0.88) !important;",
      "  backdrop-filter: blur(16px) !important;",
      "  -webkit-backdrop-filter: blur(16px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
      "  border-radius: 14px !important;",
      "  padding: 6px 12px !important;",
      "  width: 100% !important;",
      "  box-sizing: border-box !important;",
      "  cursor: pointer !important;",
      "  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) !important;",
      "}",
      "/* When NOT expanded, break DSH's 24px height-lock so pill comfortably wraps the single summary line */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"]:not([data-expanded]) {",
      "  height: auto !important;",
      "  min-height: 34px !important;",
      "  contain: none !important;",
      "}",
      "/* Prevent horizontal text overflow when collapsed: truncate cleanly with ellipsis inside the pill */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"]:not([data-expanded]) [class*=\"_summary\"],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"]:not([data-expanded]) [class*=\"_summaryText\"],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"]:not([data-expanded]) [class*=\"summaryText\"] {",
      "  overflow: hidden !important;",
      "  text-overflow: ellipsis !important;",
      "  white-space: nowrap !important;",
      "  max-width: 100% !important;",
      "}",
      "/* When think block is expanded, reset height & containment on the root AND all disclosure containers so text is 100% enclosed */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"][data-expanded],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"][data-expanded] [class*=\"_root\"],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"][data-expanded] [data-open] {",
      "  height: auto !important;",
      "  min-height: auto !important;",
      "  max-height: none !important;",
      "  contain: none !important;",
      "  overflow: visible !important;",
      "}",
      "/* Reset native DSH sticky/white disclosure row inside our frosted pill */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [data-disclosure-row],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"_row\"] {",
      "  background: transparent !important;",
      "  border: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"_title\"] {",
      "  color: #E2E6EE !important;",
      "  font-weight: 500 !important;",
      "  font-size: 13px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"_summary\"] {",
      "  color: #9CA3AF !important;",
      "  font-size: 12.5px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"_chevron\"] {",
      "  color: #9CA3AF !important;",
      "}",
      "/* Think Body: the expanded long reasoning text */",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"thinkBody\"],",
      "html[data-dsh-overlay=\"true\"] [data-variant=\"think\"] [class*=\"_thinkBody\"] {",
      "  color: #D1D5DB !important;",
      "  padding: 10px 4px 6px 12px !important;",
      "  font-size: 12.5px !important;",
      "  line-height: 1.55 !important;",
      "  white-space: pre-wrap !important;",
      "  word-break: break-word !important;",
      "  display: block !important;",
      "  max-height: 480px !important;",
      "  overflow-y: auto !important;",
      "}",
      "/* Inner body & markdown formatting inside AI bubble */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] {",
      "  gap: 8px !important;",
      "  width: 100% !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] p {",
      "  margin: 6px 0 !important;",
      "  line-height: 1.55 !important;",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] p:first-child {",
      "  margin-top: 0 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] p:last-child {",
      "  margin-bottom: 0 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] ul,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] ol {",
      "  margin: 6px 0 !important;",
      "  padding-left: 20px !important;",
      "  color: #F0F2F5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] li {",
      "  margin: 3px 0 !important;",
      "  line-height: 1.5 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] h1,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] h2,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] h3,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] h4 {",
      "  color: #FFFFFF !important;",
      "  font-weight: 600 !important;",
      "  margin: 8px 0 4px !important;",
      "  font-size: 15px !important;",
      "  line-height: 1.4 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] code:not(pre code) {",
      "  background: rgba(255, 255, 255, 0.12) !important;",
      "  color: #8CE0FF !important;",
      "  padding: 1px 5px !important;",
      "  border-radius: 4px !important;",
      "  font-size: 13px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] pre {",
      "  max-width: 100% !important;",
      "  overflow-x: auto !important;",
      "  border-radius: 10px !important;",
      "  margin: 8px 0 !important;",
      "  background: rgba(18, 20, 24, 0.9) !important;",
      "  border: 0.5px solid rgba(255, 255, 255, 0.08) !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] .md-table-wide,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_body\"] table {",
      "  margin-left: 0 !important;",
      "  width: 100% !important;",
      "  max-width: 100% !important;",
      "  overflow-x: auto !important;",
      "  display: block !important;",
      "  box-sizing: border-box !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_stopped\"] {",
      "  margin-top: 6px !important;",
      "  align-self: flex-start !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"assistant-step\"] [class*=\"_actions\"] {",
      "  display: none !important;",
      "}",
      "/* User Message Bubble (WeChat style) */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"user\"] [class*=\"_bubble\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"steering\"] [class*=\"_bubble\"] {",
      "  background: #07C160 !important;",
      "  color: #FFFFFF !important;",
      "  border-radius: 18px 18px 4px 18px !important;",
      "  padding: 10px 14px !important;",
      "  font-weight: 450 !important;",
      "  box-shadow: 0 2px 10px rgba(7, 193, 96, 0.25) !important;",
      "}",
      "/* Tool Calls & Turn Process Capsules (Floating Pill Style) */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] {",
      "  display: flex !important;",
      "  flex-direction: column !important;",
      "  align-items: flex-start !important;",
      "  margin: 4px 0 !important;",
      "  width: 100% !important;",
      "}",
      "/* Apply frosted bubble ONLY to the outermost callRow container */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"callRow\"] {",
      "  background: rgba(30, 34, 42, 0.88) !important;",
      "  backdrop-filter: blur(16px) !important;",
      "  -webkit-backdrop-filter: blur(16px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
      "  border-radius: 14px !important;",
      "  padding: 6px 12px !important;",
      "  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3) !important;",
      "  width: 100% !important;",
      "  box-sizing: border-box !important;",
      "}",
      "/* Ensure inner ToolRow and card children inside callRow NEVER have their own bubble */",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"callRow\"] [class*=\"_root\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"callRow\"] [class*=\"_card\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"callRow\"] [class*=\"_bodyWrap\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"callRow\"] [class*=\"_bodyScroll\"] {",
      "  background: transparent !important;",
      "  backdrop-filter: none !important;",
      "  -webkit-backdrop-filter: none !important;",
      "  border: none !important;",
      "  box-shadow: none !important;",
      "  padding: 0 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"_ioCard\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"_diffBody\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"tool-call\"] [class*=\"_terminalBody\"] {",
      "  background: rgba(18, 20, 26, 0.65) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.08) !important;",
      "  border-radius: 10px !important;",
      "  box-shadow: none !important;",
      "  margin-top: 6px !important;",
      "  padding: 8px 12px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-process\"] {",
      "  display: flex !important;",
      "  align-items: center !important;",
      "  margin: 4px 0 !important;",
      "  width: 100% !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-process\"] button,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-process\"] [class*=\"_root\"] {",
      "  background: rgba(36, 40, 50, 0.9) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.14) !important;",
      "  border-radius: 18px !important;",
      "  padding: 6px 14px !important;",
      "  color: #D1D5DB !important;",
      "  font-size: 13px !important;",
      "  font-weight: 500 !important;",
      "  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3) !important;",
      "  display: inline-flex !important;",
      "  align-items: center !important;",
      "  gap: 6px !important;",
      "  cursor: pointer !important;",
      "  outline: none !important;",
      "  transition: background-color 0.15s ease, transform 0.1s ease !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-process\"] button:active,",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-process\"] [class*=\"_root\"]:active {",
      "  transform: scale(0.96) !important;",
      "  background: rgba(255, 255, 255, 0.16) !important;",
      "}",
      "/* Step Process Pills: '正在分析请求' / '正在运行命令' / '执行了命令' */",
      "html[data-dsh-overlay=\"true\"] [data-step-process] {",
      "  margin: 6px 0 !important;",
      "  width: 100% !important;",
      "  display: flex !important;",
      "  flex-direction: column !important;",
      "  align-items: flex-start !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process] button[class*=\"_title\"],",
      "html[data-dsh-overlay=\"true\"] [data-step-process] > div > button {",
      "  background: rgba(32, 36, 46, 0.9) !important;",
      "  backdrop-filter: blur(20px) !important;",
      "  -webkit-backdrop-filter: blur(20px) !important;",
      "  border: 1px solid rgba(255, 255, 255, 0.14) !important;",
      "  border-radius: 16px !important;",
      "  padding: 6px 14px !important;",
      "  color: #E2E6EE !important;",
      "  font-size: 13px !important;",
      "  font-weight: 500 !important;",
      "  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3) !important;",
      "  display: inline-flex !important;",
      "  align-items: center !important;",
      "  gap: 8px !important;",
      "  width: fit-content !important;",
      "  max-width: 92% !important;",
      "  cursor: pointer !important;",
      "  outline: none !important;",
      "  transition: background-color 0.15s ease, transform 0.1s ease !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process] button[class*=\"_title\"]:active,",
      "html[data-dsh-overlay=\"true\"] [data-step-process] > div > button:active {",
      "  transform: scale(0.96) !important;",
      "  background: rgba(255, 255, 255, 0.16) !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process] [class*=\"_leading\"] {",
      "  color: #9CA3AF !important;",
      "  width: 16px !important;",
      "  height: 16px !important;",
      "  flex: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process] [class*=\"_label\"] {",
      "  color: #E2E6EE !important;",
      "  font-size: 13px !important;",
      "  font-weight: 500 !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process] button[class*=\"_title\"][aria-expanded=\"true\"] {",
      "  padding-bottom: 6px !important;",
      "  margin-bottom: 6px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-step-process-body] {",
      "  width: 100% !important;",
      "  max-width: 100% !important;",
      "  padding: 0 !important;",
      "  margin-top: 4px !important;",
      "}",
      "/* Thinking status: clean and visible */",
      "html[data-dsh-overlay=\"true\"] [class*=\"_turnStatus\"] {",
      "  margin: 8px 0 !important;",
      "  padding: 0 4px !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"turn-tail\"] {",
      "  display: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"context\"] {",
      "  display: none !important;",
      "}",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"compaction\"],",
      "html[data-dsh-overlay=\"true\"] [data-chat-flow-kind=\"manual-compaction\"] {",
      "  display: none !important;",
      "}",
      "/* Respect reduced motion preferences */",
      "@media (prefers-reduced-motion: reduce) {",
      "  html[data-dsh-overlay=\"true\"] [data-chat-flow-kind],",
      "  html[data-dsh-overlay=\"true\"] [data-question-key],",
      "  html[data-dsh-overlay=\"true\"] [data-plan-review-key],",
      "  html[data-dsh-overlay=\"true\"] [data-composer-seat],",
      "  html[data-dsh-overlay=\"true\"] [class*=\"_composerSeat\"],",
      "  html[data-dsh-overlay=\"true\"] [class*=\"_composerHero\"],",
      "  html[data-dsh-overlay=\"true\"] [class*=\"_heroWorkspaceRow\"],",
      "  html[data-dsh-overlay=\"true\"] [class*=\"_centerCol\"],",
      "  .dsh-overlay-whale-btn,",
      "  .dsh-overlay-close-btn,",
      "  .dsh-overlay-home-btn,",
      "  .dsh-overlay-back-chat-btn {",
      "    animation: none !important;",
      "  }",
      "}",
    ].join("\n");

    var WHALE_ICON = "data:image/png;base64,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";

    function apply(ctx) {
      var checkOverlay = function () {
        if (typeof window === "undefined") return false;
        try {
          if (window.DSHOverlayBridge !== undefined || window.__DSH_OVERLAY__ === true) return true;
          var search = window.location && window.location.search;
          if (search && (search.indexOf("ov=") !== -1 || search.indexOf("overlay") !== -1)) return true;
        } catch (e) {}
        return false;
      };

      var isOverlayMode = checkOverlay();
      if (isOverlayMode) {
        document.documentElement.setAttribute("data-dsh-overlay", "true");
        window.__DSH_OVERLAY__ = true;

        // In mobile overlay mode, prevent auto-focus on input fields when switching sessions or clicking home.
        // Soft keyboard should ONLY pop up when user explicitly touches/clicks the input box!
        var userTouchingInputRecently = false;
        var userTouchingInputTimer = null;
        var recordUserTouch = function (e) {
          var target = e.target instanceof Element ? e.target : (e.target && e.target.parentElement);
          var isInputArea = target && target.closest && target.closest(
            'input, textarea, [contenteditable="true"], [role="textbox"], [data-lexical-editor], [data-composer-input], [class*="_input"]'
          );
          if (isInputArea) {
            userTouchingInputRecently = true;
            if (userTouchingInputTimer) clearTimeout(userTouchingInputTimer);
            userTouchingInputTimer = setTimeout(function () {
              userTouchingInputRecently = false;
            }, 350);
          } else {
            userTouchingInputRecently = false;
            if (userTouchingInputTimer) clearTimeout(userTouchingInputTimer);
          }
        };
        document.addEventListener("pointerdown", recordUserTouch, true);
        document.addEventListener("touchstart", recordUserTouch, true);
        document.addEventListener("mousedown", recordUserTouch, true);

        var origFocus = HTMLElement.prototype.focus;
        HTMLElement.prototype.focus = function (opts) {
          // If this is an input/textarea/contenteditable and it wasn't triggered by direct user touch ON THE INPUT BOX, suppress focus
          var isInputLike = this.matches && this.matches('input, textarea, [contenteditable="true"], [role="textbox"], [data-lexical-editor], [data-composer-input]');
          if (isInputLike && !userTouchingInputRecently) {
            return;
          }
          return origFocus.apply(this, arguments);
        };

        // Restore last session automatically on overlay launch (default DSH behavior preserved)
      }

      var tag = document.createElement("style");
      tag.dataset.plugin = "dsh-web-mobile-fix";
      tag.textContent = CSS;
      document.head.append(tag);

      var whaleBtn = null;
      var closeBtn = null;
      var homeBtn = null;
      if (isOverlayMode) {
        // Auto-scroll chat bubbles to bottom when soft keyboard pops up or composer is focused
        var scrollChatToBottom = function () {
          if (!document.documentElement.hasAttribute("data-dsh-overlay")) return;
          var scroller = document.querySelector('[data-conversation-scroll], [class*="_scrollBody"], [class*="_scroll"]');
          if (scroller) {
            scroller.scrollTop = scroller.scrollHeight;
          }
        };

        var switchToChat = function () {
          try {
            var layout = ctx.get ? ctx.get("layout") : (ctx.layout || void 0);
            if (layout && typeof layout.selectPanel === "function") {
              layout.selectPanel(null);
            }
          } catch (e) {}
          try {
            var chatTab = Array.from(document.querySelectorAll('[data-conversation-tabs] button, [role="tab"]')).find(function (b) {
              var txt = b.textContent || "";
              return txt.indexOf("对话") !== -1 || txt.indexOf("Chat") !== -1;
            });
            if (chatTab) {
              chatTab.click();
              return true;
            }
            var firstTab = document.querySelector('[data-conversation-tabs] button:first-child');
            if (firstTab) {
              firstTab.click();
              return true;
            }
          } catch (e) {}
          return false;
        };

        whaleBtn = document.createElement("button");
        whaleBtn.type = "button";
        whaleBtn.className = "dsh-overlay-whale-btn";
        whaleBtn.setAttribute("aria-label", "Toggle Sidebar");
        whaleBtn.innerHTML = '<img src="' + WHALE_ICON + '" alt="Whale Logo" />';
        whaleBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          var layout = null;
          try { layout = ctx.get ? ctx.get("layout") : void 0; } catch (err) {}
          if (layout && layout.toggleSidebar) {
            layout.toggleSidebar();
          }
        });
        document.body.appendChild(whaleBtn);

        closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.className = "dsh-overlay-close-btn";
        closeBtn.setAttribute("aria-label", "Close Session");
        closeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        closeBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          try {
            if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.exit === "function") {
              window.DSHOverlayBridge.exit();
            } else if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.close === "function") {
              window.DSHOverlayBridge.close();
            }
          } catch (err) {}
        });
        document.body.appendChild(closeBtn);

        homeBtn = document.createElement("button");
        homeBtn.type = "button";
        homeBtn.className = "dsh-overlay-home-btn";
        homeBtn.setAttribute("aria-label", "New Blank Session");
        homeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M3 10.25L12 3l9 7.25V20a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9.75z"></path></svg>';
        homeBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          // 1. Defocus and dismiss soft keyboard
          try {
            if (document.activeElement && typeof document.activeElement.blur === "function") {
              document.activeElement.blur();
            }
            if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.hideSoftInput === "function") {
              window.DSHOverlayBridge.hideSoftInput();
            }
          } catch (err) {}

          // 2. Close any open dialogs / modal overlays (e.g. settings)
          try {
            var closeDialog = document.querySelector(
              '[role="dialog"] button[aria-label*="close" i], ' +
              '[role="dialog"] button[aria-label*="关闭"], ' +
              '[role="dialog"] button[class*="close"]'
            );
            if (closeDialog) closeDialog.click();
          } catch (err) {}

          // 3. Return from Trajectory or other tabs back to Chat view
          switchToChat();

          // 5. Trigger new blank session / return to home
          var triggered = false;

          // Method A: Call uiWorkspace service directly
          try {
            var uiWs = ctx.get ? ctx.get("uiWorkspace") : (ctx.uiWorkspace || void 0);
            if (uiWs && typeof uiWs.startSession === "function") {
              uiWs.startSession();
              triggered = true;
            }
          } catch (err) {}

          // Method B: DOM fallback - click native DSH new session button in sidebar/workspace
          if (!triggered) {
            try {
              var newBtn = document.querySelector(
                'button[class*="newSession"], button[class*="_newSession"], ' +
                'button[aria-label*="新会话"], button[aria-label*="新建会话"], ' +
                'button[aria-label*="New session" i], button[aria-label*="new chat" i], ' +
                '[data-slot="sidebar"] button[aria-label*="会话"]'
              );
              if (newBtn) {
                newBtn.click();
                triggered = true;
              }
            } catch (err) {}
          }

          // Method C: Delayed reassurance to ensure chat is in front and scrolled down
          setTimeout(function () {
            switchToChat();
            if (typeof scrollChatToBottom === "function") {
              scrollChatToBottom();
            }
          }, 150);
        });
        document.body.appendChild(homeBtn);

        var backToChatBtn = document.createElement("button");
        backToChatBtn.type = "button";
        backToChatBtn.className = "dsh-overlay-back-chat-btn";
        backToChatBtn.setAttribute("aria-label", "Back to Chat");
        backToChatBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 19l-7-7 7-7"/></svg><span>返回对话</span>';
        backToChatBtn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          switchToChat();
        });
        document.body.appendChild(backToChatBtn);
      }

      /* Pure Blacklist Axiom: "Blank is Blacklist"
         In overlay mode, touches on actual UI elements are completely safe and unintercepted.
         Only clicking on the blacklisted transparent root backdrops triggers dismiss actions. */
      var onOverlayClick = function (event) {
        var isOverlay = document.documentElement.hasAttribute("data-dsh-overlay");
        if (!isOverlay) return;

        var target = event.target instanceof Element ? event.target : (event.target && event.target.parentElement);
        if (!target) return;

        // Level 1: Floating top control buttons (whale, close, home, back-to-chat)
        if (target.closest && target.closest('.dsh-overlay-whale-btn, .dsh-overlay-close-btn, .dsh-overlay-home-btn, .dsh-overlay-back-chat-btn')) {
          return;
        }

        // PURE BLACKLIST AXIOM: "Blank is Blacklist"
        // Only touches directly on the intentionally transparent shell/backdrop elements are treated as blank clicks!
        // Everything else (bubbles, cards, tools, text, settings, plugins, modals, inputs, menus) is REAL UI and NEVER triggers back!
        var isBlacklistedBackdrop = (
          target === document.documentElement ||
          target === document.body ||
          target.id === "root" ||
          (target.matches && target.matches(
            '[class*="_frame"], [class*="_centerCol"], [class*="_scrollBody"], [class*="_scroll"], [class*="_viewArea"], [class*="_root"][data-phase]'
          ))
        );

        if (!isBlacklistedBackdrop) {
          // Clicked on ANY real component or its children -> let it work naturally, NEVER minimize/back!
          return;
        }

        // ── Clicked on Blacklisted Transparent Blank Space ──
        // PURE SINGLE RESPONSIBILITY: Clicking blank means pressBack()!
        // No keyboard interception, no view switching, no transient branches.
        try {
          if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.pressBack === "function") {
            window.DSHOverlayBridge.pressBack();
          } else if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.minimize === "function") {
            window.DSHOverlayBridge.minimize();
          } else if (window.DSHOverlayBridge && typeof window.DSHOverlayBridge.close === "function") {
            window.DSHOverlayBridge.close();
          }
        } catch (e) {}
      };
      document.addEventListener("click", onOverlayClick, true);

      // Auto-collapse full-screen sidebar on mobile/overlay when a session, panel, plugin, or new session is selected
      var onSidebarItemClick = function (event) {
        var target = event.target instanceof Element ? event.target : (event.target && event.target.parentElement);
        if (!target) return;
        var frame = document.querySelector('[class*="_frame"]');
        if (!frame || frame.hasAttribute("data-sidebar-collapsed")) return;

        var isOverlay = document.documentElement.hasAttribute("data-dsh-overlay");
        var isNarrow = isOverlay || (window.innerWidth && window.innerWidth <= 700);
        if (!isNarrow) return;

        var autoCollapseTarget = target.closest && target.closest(
          '[class*="_sessionRow"], [class*="_searchResultRow"], ' +
          '[class*="_panelRow"], nav[class*="_panelList"] button, ' +
          'button[class*="_panelRow"], button[aria-label*="插件"], button[aria-label*="Plugin" i], ' +
          '[class*="_settingsArea"] button, ' +
          'button[class*="_newSession"], button[aria-label*="新会话"], button[aria-label*="新建会话"]'
        );
        if (autoCollapseTarget) {
          setTimeout(function () {
            try {
              var layout = ctx.get ? ctx.get("layout") : void 0;
              if (layout && typeof layout.toggleSidebar === "function") {
                var currentFrame = document.querySelector('[class*="_frame"]');
                if (currentFrame && !currentFrame.hasAttribute("data-sidebar-collapsed")) {
                  layout.toggleSidebar();
                }
              }
            } catch (e) {}
          }, 80);
        }
      };
      document.addEventListener("click", onSidebarItemClick, false);

      // Auto-scroll chat bubbles to bottom when soft keyboard pops up or composer is focused
      var scrollChatToBottom = function () {
        if (!document.documentElement.hasAttribute("data-dsh-overlay")) return;
        var scroller = document.querySelector('[data-conversation-scroll], [class*="_scrollBody"], [class*="_scroll"]');
        if (scroller) {
          scroller.scrollTop = scroller.scrollHeight;
        }
      };

      var onComposerFocus = function (e) {
        if (!document.documentElement.hasAttribute("data-dsh-overlay")) return;
        var target = e.target;
        if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable || (target.closest && target.closest('[data-composer-card], [class*="_card"]')))) {
          scrollChatToBottom();
          setTimeout(scrollChatToBottom, 100);
          setTimeout(scrollChatToBottom, 250);
          setTimeout(scrollChatToBottom, 400);
        }
      };
      document.addEventListener("focusin", onComposerFocus, true);

      var onViewportResize = function () {
        if (!document.documentElement.hasAttribute("data-dsh-overlay")) return;
        var active = document.activeElement;
        if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable || (active.closest && active.closest('[data-composer-card], [class*="_card"]')))) {
          scrollChatToBottom();
          setTimeout(scrollChatToBottom, 100);
          setTimeout(scrollChatToBottom, 250);
        }
      };
      if (typeof window !== "undefined") {
        if (window.visualViewport) {
          window.visualViewport.addEventListener("resize", onViewportResize);
        }
        window.addEventListener("resize", onViewportResize);
      }

      ctx.effect(function () {
        return function () {
          tag.remove();
          if (whaleBtn && whaleBtn.parentNode) whaleBtn.parentNode.removeChild(whaleBtn);
          if (closeBtn && closeBtn.parentNode) closeBtn.parentNode.removeChild(closeBtn);
          if (homeBtn && homeBtn.parentNode) homeBtn.parentNode.removeChild(homeBtn);
          if (backToChatBtn && backToChatBtn.parentNode) backToChatBtn.parentNode.removeChild(backToChatBtn);
          document.removeEventListener("click", onOverlayClick, true);
          document.removeEventListener("focusin", onComposerFocus, true);
          if (typeof window !== "undefined") {
            if (window.visualViewport) {
              window.visualViewport.removeEventListener("resize", onViewportResize);
            }
            window.removeEventListener("resize", onViewportResize);
          }
        };
      });
    }

    exports.apply = apply;
    return module.exports;
  }
});
