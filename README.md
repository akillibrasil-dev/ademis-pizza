# Ademis Pizza — MVP 0.1

SaaS de operação para pizzarias com múltiplas lojas, cardápio, tamanhos, pedidos locais, cozinha e indicadores básicos.

## Tecnologia

Next.js 15, React 19, TypeScript, Supabase (PostgreSQL, Auth, Realtime) e Vercel.

## Configuração

1. Execute `npm install` (Node 22).
2. Copie `.env.example` para `.env.local` e forneça uma chave **publishable** do projeto Supabase (não uma chave secret/service role).
3. `npm run dev`.
4. No Supabase Auth, configure a URL do site e URLs de redirecionamento.
5. Habilite confirmação por e-mail em produção e configure SMTP próprio quando necessário.

Banco já provisionado no projeto **Ademis Pizza** (`evyxrihilushknblfjce`) via migração `initial_pizza_mvp`.

## MVP entregue

- Autenticação Supabase (cadastro e login).
- Pizzarias isoladas por proprietário com RLS.
- Cardápio mestre: produtos, categorias, preços e variações de tamanho.
- Pedido local por balcão, telefone ou WhatsApp, calculado no PostgreSQL com preços oficiais dos produtos.
- Controle de status de pedidos, histórico no banco, Kanban da cozinha, indicadores básicos.
- Esqueleto das integrações iFood e 99Food, **sem conexão externa ativa**.

## Limites deliberados

- iFood e 99Food dependem de credenciais, certificação e webhooks oficiais. **Não há importação, sincronização ou publicação de cardápios nesses serviços neste MVP.**
- Sem pagamentos, impressora térmica, motoboys, estoque, complementos aplicados em pedidos, autenticação de funcionários, ou integração fiscal.
- Sem fidelidade / backup de pedidos offline.
- O painel de pedidos exibe os últimos 200 pedidos e itens consultados no MVP.
- Não se deve usar em operação crítica de delivery antes de testes de produção, políticas de recuperação e monitoramento.

## Segurança

O cliente usa apenas a chave pública do Supabase; o SQL protege tabelas com RLS. A RPC `create_local_order` executa a criação transacional de pedidos e recalcula valores no servidor. Integrações futuras usarão segredos somente do lado do servidor.

## Próximas etapas

Homologação das APIs, worker de filas/idempotência, reconciliação, cardápio com pizzas meio a meio/bordas, testes automatizados e validação piloto.
