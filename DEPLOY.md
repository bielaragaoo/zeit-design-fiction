# Guia de Deploy no EasyPanel (Hostinger)

## Pré-requisitos

1. Conta na Hostinger com EasyPanel instalado
2. Repositório Git configurado (GitHub, GitLab, etc.)

## Passo a Passo

### 1. Preparar o Repositório

Certifique-se de que todos os arquivos estão commitados e enviados para o repositório:

```bash
git add .
git commit -m "Preparar para deploy"
git push origin main
```

### 2. Configurar no EasyPanel

1. Acesse o EasyPanel na sua conta Hostinger
2. Clique em "New Project" ou "Novo Projeto"
3. Selecione "From Git Repository" ou "De Repositório Git"
4. Conecte seu repositório Git

### 3. Configurações do Build

No EasyPanel, configure:

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Port**: `3000`
- **Node Version**: `20` (ou a versão mais recente disponível)

### 4. Variáveis de Ambiente (se necessário)

Se você precisar de variáveis de ambiente, adicione-as na seção "Environment Variables" do EasyPanel.

### 5. Deploy

1. Clique em "Deploy" ou "Fazer Deploy"
2. Aguarde o build completar
3. Seu site estará disponível na URL fornecida pelo EasyPanel

## Alternativa: Deploy com Docker

Se preferir usar Docker (já incluído no projeto):

1. No EasyPanel, selecione "Docker" como tipo de projeto
2. O Dockerfile já está configurado
3. Configure a porta: `3000`
4. Faça o deploy

## Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Commit e push para o repositório
3. No EasyPanel, clique em "Redeploy" ou configure deploy automático

## Dicas

- O site usa `output: 'standalone'` para otimizar o build
- As imagens estão configuradas como `unoptimized: true` para compatibilidade
- Certifique-se de que as URLs das imagens dos mangás estão acessíveis publicamente

## Suporte

Se encontrar problemas:
- Verifique os logs no EasyPanel
- Certifique-se de que a porta 3000 está configurada corretamente
- Verifique se todas as dependências estão no `package.json`

