
```markdown
# 🛡️ Extensão: Esconde Guia do Modo IA no Google

Esta extensão do Chrome permite **ocultar a guia do Modo IA** na página do Google.  
Ela inclui um **botão on/off** para ativar ou desativar a função rapidamente.

---

## 🚀 Funcionalidades

- Oculta automaticamente a guia do Modo IA na página do Google.  
- Botão **on/off** para ativar ou desativar a função sem precisar remover a extensão.  
- Mantém a página do Google limpa e organizada.  

---

## 📦 Estrutura da Extensão

```

extensao-esconde-guia-do-modo-ia-google/

├── manifest.json       # Configuração da extensão

├── content.js          # Script que oculta a guia do Modo IA

├── popup.html          # Interface do botão on/off

├── popup.js            # Lógica do botão on/off

└──  style.css           # Estilo do popup

```

---

## ⚙️ Como instalar no Chrome

1. Faça o download ou clone este repositório.  
2. Abra o Chrome e vá para `chrome://extensions/`.  
3. Ative o **Modo desenvolvedor** (canto superior direito).  
4. Clique em **Carregar sem compactação** (`Load unpacked`) e selecione a pasta da extensão.  
5. A extensão aparecerá na barra do Chrome com o ícone e você poderá usar o botão on/off.

---

## 🖌️ Personalização

- O botão **on/off** salva o estado usando o armazenamento do Chrome (`chrome.storage.sync`).  
- Você pode alterar o **seletor `.olrp5b`** no `content.js` caso o Google mude a estrutura da página.  

---

## ✍️ Autor

**Luis Fernando Afonso**  
💼 Projeto pessoal para estudo e utilidade no Google Chrome  
📧 Contato: [luis.sun@gmail.com](mailto:luis.sun@gmail.com)

---

## 🧾 Licença

Esta extensão está licenciada sob a **GNU GENERAL PUBLIC LICENSE v3.0**.  

![Licença](https://img.shields.io/badge/License-GPLv3-blue.svg)  
[Saiba mais sobre a GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)
```
