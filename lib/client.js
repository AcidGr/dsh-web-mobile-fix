window.__ModuleLoader__.load({
  id: "dsh-web-mobile-fix",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var CSS = [
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
      "  /* 3. Left sidebar on narrow screens: keep the grid fixed at 56px rail in",
      "        BOTH states (center column never moves or squeezes) and let the",
      "        expanded sidebar OVERFLOW its 56px column to float over the center",
      "        (z-index 60 on the grid item) instead of positioning it absolutely.",
      "        No transform is applied: a transform on the sidebar column would",
      "        become the containing block for its position:fixed descendants —",
      "        the settings modal renders inside the sidebar DOM and would be",
      "        trapped/positioned relative to the drawer instead of the viewport.",
      "        The product's own wide-sidebar interactions (rail buttons, search",
      "        focus, settings dialog) keep working natively, and the stock",
      "        wide-content fade-in remains the only animation. */",
      "  [class*=\"_frame\"] {",
      "    grid-template-columns: 56px minmax(0, 1fr) 0 !important;",
      "  }",
      "  [class*=\"_frame\"] [class*=\"_handle\"] {",
      "    display: none !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_sidebarCol\"] {",
      "    overflow: visible !important;",
      "    z-index: 60 !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_sidebarCol\"] > div {",
      "    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.22) !important;",
      "    position: relative !important;",
      "    z-index: 61 !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_centerCol\"] {",
      "    position: relative !important;",
      "  }",
      "  [class*=\"_frame\"]:not([data-sidebar-collapsed]) [class*=\"_centerCol\"]::before {",
      "    content: \"\" !important;",
      "    position: absolute !important;",
      "    inset: 0 !important;",
      "    background: rgba(0, 0, 0, 0.3) !important;",
      "    z-index: 50 !important;",
      "    pointer-events: none !important;",
      "  }",
      "}",
    ].join("\n");

    function apply(ctx) {
      var tag = document.createElement("style");
      tag.dataset.plugin = "dsh-web-mobile-fix";
      tag.textContent = CSS;
      document.head.append(tag);

      /* Tap-outside-to-collapse: on narrow viewports, when the expanded sidebar
         is floating over the center, any click landing outside the sidebar
         column collapses it (same action as the toggle button). Capture phase:
         fires before target handlers and before any stopPropagation, and scroll
         gestures never produce clicks. Clicks inside the sidebar (including the
         settings dialog, which renders inside the sidebar DOM) are ignored.
         Crucially, clicks on portal/overlay elements (such as the task context menu
         with Rename/Fork/Archive options, or modal dialogs mounted on document.body)
         must NOT be intercepted.
         The layout service is fetched via ctx.get() (optional lookup) because
         direct ctx.layout access is gated behind the plugin's inject
         declaration by the guarded ctx facade — a plain function-form plugin
         has no declaration site, so ctx.layout would throw. */
      var onCaptureClick = function (event) {
        if (!window.matchMedia || !window.matchMedia("(max-width: 700px)").matches) return;
        var frame = document.querySelector('[class*="_frame"]') || document.querySelector('[data-slot="root"] > div');
        if (!frame || frame.hasAttribute("data-sidebar-collapsed")) return;
        var sidebarCol = frame.querySelector('[class*="_sidebarCol"]') || frame.firstElementChild;
        if (!sidebarCol) return;

        var targetEl = event.target instanceof Element ? event.target : (event.target && event.target.parentElement);
        if (!targetEl) return;

        // Ignore clicks inside the sidebar drawer
        if (sidebarCol.contains(targetEl)) return;

        // Ignore clicks inside portals (menus, dialogs, modals mounted outside frame onto body)
        if (!frame.contains(targetEl)) return;

        // Ignore clicks inside overlay elements (dropdown menus, modals, dialogs, tooltips)
        if (targetEl.closest && targetEl.closest('[role="menu"], [role="menuitem"], [role="dialog"], [role="alertdialog"], [role="listbox"], [role="tooltip"], [data-dockkit-tab-menu]')) {
          return;
        }

        var layout = null;
        try {
          layout = ctx.get ? ctx.get("layout") : void 0;
        } catch (e) {
          layout = void 0;
        }
        if (layout && layout.toggleSidebar) {
          event.preventDefault();
          event.stopPropagation();
          layout.toggleSidebar();
        }
      };
      document.addEventListener("click", onCaptureClick, true);

      ctx.effect(function () {
        return function () {
          tag.remove();
          document.removeEventListener("click", onCaptureClick, true);
        };
      });
    }

    exports.apply = apply;
    return module.exports;
  }
});
