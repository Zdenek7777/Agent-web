import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { agentId, emailContent } = await request.json();

    if (!emailContent || !emailContent.trim()) {
      return NextResponse.json(
        { error: 'Email content is required' },
        { status: 400 }
      );
    }

    // Simulace AI zpracování
    // V produkci byste zde volali skutečné AI API (OpenAI, Claude, atd.)
    
    // Pro demo účely vytvoříme jednoduchou odpověď
    const response = generateEmailResponse(emailContent);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error processing email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateEmailResponse(emailContent: string): string {
  // Jednoduchá logika pro demo - v produkci použijete skutečné AI API
  const lines = emailContent.split('\n');
  const subjectLine = lines.find(line => line.toLowerCase().includes('předmět:') || line.toLowerCase().includes('subject:'));
  const fromLine = lines.find(line => line.toLowerCase().includes('od:') || line.toLowerCase().includes('from:'));
  
  const subject = subjectLine ? subjectLine.split(':')[1]?.trim() : 'Váš dotaz';
  const from = fromLine ? fromLine.split(':')[1]?.trim() : 'Vážený kliente';
  
  // Extract main content (everything after headers)
  const bodyStart = lines.findIndex(line => line.trim() === '');
  const body = bodyStart >= 0 ? lines.slice(bodyStart + 1).join('\n').trim() : emailContent;

  return `Vážený/á ${from || 'kliente'},

děkujeme za Váš email týkající se "${subject}".

${body.length > 0 ? `Vzhledem k Vašemu dotazu: "${body.substring(0, 100)}${body.length > 100 ? '...' : ''}"` : ''}

Rádi bychom Vám poskytli následující informace:

[Zde bude AI vygenerovaná odpověď na základě analýzy Vašeho emailu]

Pokud budete mít jakékoliv další dotazy, neváhejte nás kontaktovat.

S pozdravem,
Tým FAIL Bootcamp

---
Poznámka: Toto je automaticky vygenerovaná odpověď. Pro produkční použití bude připojeno skutečné AI API.`;
}

