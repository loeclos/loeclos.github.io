{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    bun
    nodejs_22
    typescript
    eslint
    tailwindcss-language-server
  ];

  shellHook = ''
    echo "📦 portfolio-3.0 development shell"
    echo "   bun  $(bun --version)"
    echo "   node $(node --version)"
  '';
}
