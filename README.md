# 🌍 Plataforma ONG

**Entrega I – Fundamentos e Estruturação (Desenvolvimento Front-end)**  
Projeto acadêmico para uma **plataforma web completa e acessível** destinada a Organizações Não Governamentais (ONGs).

> Desenvolvido por **Igor Ramos Fermino** — Projeto acadêmico (UniFran / Cruzeiro do Sul Virtual).

---

## 🎯 Objetivo
Construir uma plataforma que permita às ONGs **divulgar projetos**, **captar doações**, **gerenciar voluntários** e **promover transparência** com foco em acessibilidade e desempenho.

---

## 🧩 Tecnologias
- **HTML5** (semântica e SEO)
- **CSS3** (layout responsivo, mobile-first)
- **JavaScript** puro (interatividade e máscaras)
- **Canvas API** (gráficos pizza, linha, barras)
- **Acessibilidade** (WCAG 2.1 AA)

---

## 🗂️ Estrutura
```
Plataforma_ONG/
├─ index.html
├─ sobre.html
├─ projetos.html
├─ voluntariado.html
├─ doacoes.html
├─ transparencia.html
├─ contato.html
├─ blog.html
├─ inscricao.html            # página extra de apoio (inscrição em projetos)
├─ css/
│  └─ style.css
├─ js/
│  ├─ masks.js              # máscaras CPF/CEP/telefone + envio simulado
│  ├─ menu.js               # menu responsivo (mobile)
│  └─ charts.js             # gráficos Canvas (pizza/linha/barras)
└─ assets/
   ├─ img/ (20 imagens PNG + WebP, via <picture> + lazy)
   ├─ audio/ (depoimento .wav)
   └─ video/ (captions.vtt, LEIA-ME.txt para o vídeo)
```

---

## ✅ Funcionalidades
- **8+ páginas** com HTML5 semântico e hierarquia de títulos
- **4 formulários** com validação nativa e **máscaras** (CPF/telefone/CEP)
- **Galeria responsiva** com `picture` (WebP + PNG) e `loading="lazy"`
- **Multimídia**: áudio + vídeo com legendas (`captions.vtt`)
- **3 gráficos Canvas**: pizza, linha e barras (sem libs externas)
- **Acessibilidade**: skip link, roles/aria, labels, navegação por teclado
- **SEO**: metadados e estrutura semântica

---

## ▶️ Como executar localmente
1. Baixe/clique em `index.html` para abrir no navegador **ou** use a extensão **Live Server** no VS Code.
2. Substitua o arquivo de vídeo real em `assets/video/` se desejar (o `captions.vtt` já está pronto).

---

## 🧪 Validação W3C (HTML)
Você pode validar **por upload** ou **por URL**:

- **Upload**: https://validator.w3.org/#validate_by_upload  
  (valide cada página: `index.html`, `sobre.html`, etc.)

- **URL** (recomendado após publicar no GitHub Pages):  
  https://validator.w3.org/#validate_by_uri

Registre os resultados (data/ok/observações) conforme as exigências da disciplina.

---

## 🌐 Publicação (GitHub Pages)
1. Repositório público: `plataforma-ong`  
2. **Settings → Pages → Branch: `main` / `(root)` → Save**  
3. Acesse: `https://<seu-usuario>.github.io/plataforma-ong/`

---

## 📅 Data
Atualizado em: 11/10/2025

---

Feito com ❤️ por **Igor Ramos Fermino** — Projeto acadêmico (UniFran / Cruzeiro do Sul Virtual)

---

# 🌍 NGO Platform

**Assignment I – Fundamentals & Structuring (Front-end Development)**  
Academic project for a **complete and accessible web platform** for NGOs.

> Developed by **Igor Ramos Fermino** — Academic project (UniFran / Cruzeiro do Sul Virtual).

## 🎯 Goal
Build a platform that enables NGOs to **showcase projects**, **receive donations**, **manage volunteers**, and **promote transparency**, focusing on accessibility and performance.

## 🧩 Tech Stack
- **HTML5** (semantic structure & SEO)
- **CSS3** (responsive, mobile-first)
- **Vanilla JavaScript** (interactivity & input masks)
- **Canvas API** (pie/line/bar charts)
- **Accessibility** (WCAG 2.1 AA)

## 🗂️ Structure
See the directory tree above (Portuguese section).

## ✅ Features
- **8+ pages** with semantic HTML and heading hierarchy
- **4 forms** with native validation and **masks** (CPF/phone/ZIP-CEP)
- **Responsive gallery** using `picture` (WebP + PNG) and `loading="lazy"`
- **Multimedia**: audio + video with subtitles (`captions.vtt`)
- **3 Canvas charts**: pie, line, bar (no external libs)
- **Accessibility**: skip link, roles/aria, labels, keyboard navigation
- **SEO**: metadata and semantic structure

## ▶️ Run locally
Open `index.html` in your browser or use **Live Server** in VS Code.

## 🧪 W3C Validation (HTML)
Validate by **upload** or **URL** on https://validator.w3.org/  
Record results (date/status/notes) as required by the course.

## 🌐 Publish (GitHub Pages)
**Settings → Pages → Branch: `main` / `(root)` → Save**  
Then visit: `https://<your-username>.github.io/plataforma-ong/`

---

Updated on: 11/10/2025  
Made with ❤️ by **Igor Ramos Fermino** — Academic project (UniFran / Cruzeiro do Sul Virtual)
