import { Currency, Language, CartItem, CustomerOrderInfo } from '../types';
import { EXCHANGE_RATES, STORE_NAME, WHATSAPP_PHONE } from '../data/menu';

export { WHATSAPP_PHONE };

export function formatPrice(priceInPyg: number, currency: Currency = 'PYG'): string {
  if (currency === 'PYG') {
    return `₲ ${priceInPyg.toLocaleString('es-PY')}`;
  }
  if (currency === 'BRL') {
    const brl = priceInPyg * EXCHANGE_RATES.BRL;
    return `R$ ${brl.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (currency === 'USD') {
    const usd = priceInPyg * EXCHANGE_RATES.USD;
    return `$ ${usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `₲ ${priceInPyg.toLocaleString('es-PY')}`;
}

export function buildWhatsAppMessage(
  cartItems: CartItem[],
  customerInfo: CustomerOrderInfo,
  totalPyg: number,
  currency: Currency,
  lang: Language,
  storeName: string = STORE_NAME,
  deliveryFee: number = 0
): string {
  const isPt = lang === 'pt';
  const header = isPt
    ? `*NOVO PEDIDO - ${storeName.toUpperCase()}* 🥟☕`
    : `*NUEVO PEDIDO - ${storeName.toUpperCase()}* 🥟☕`;

  const grandTotalPyg = totalPyg + (customerInfo.orderType === 'delivery' ? deliveryFee : 0);

  const itemsList = cartItems
    .map((item, index) => {
      let optText = '';
      if (item.selectedOptions && Object.keys(item.selectedOptions).length > 0) {
        optText = `\n   ${Object.entries(item.selectedOptions)
          .map(([k, v]) => `• ${k}: ${v}`)
          .join('\n   ')}`;
      }
      const noteText = item.specialInstructions
        ? `\n   Obs: _${item.specialInstructions}_`
        : '';
      return `${index + 1}. *${item.quantity}x* ${item.name} - ${formatPrice(
        item.unitPrice * item.quantity,
        currency
      )}${optText}${noteText}`;
    })
    .join('\n\n');

  const orderTypeLabels: Record<string, { es: string; pt: string }> = {
    delivery: { es: 'Delivery / Envío a Domicilio', pt: 'Entrega Delivery' },
    takeaway: { es: 'Para Llevar / Retiro en Local', pt: 'Para Retirar no Balcão' },
    dine_in: { es: 'Consumo en el Local', pt: 'Consumo na Mesa' },
  };

  const paymentLabels: Record<string, { es: string; pt: string }> = {
    efectivo: { es: 'Efectivo', pt: 'Dinheiro' },
    transferencia: { es: 'Transferencia Bancaria', pt: 'Transferência Bancária' },
    pix: { es: 'PIX', pt: 'PIX' },
    tarjeta: { es: 'Tarjeta de Débito/Crédito (POS)', pt: 'Cartão de Débito/Crédito' },
  };

  const infoSection = isPt
    ? `*DADOS DO CLIENTE:*
• Nome: ${customerInfo.customerName || 'Não informado'}
• WhatsApp: ${customerInfo.customerPhone || 'Não informado'}
• Tipo: ${orderTypeLabels[customerInfo.orderType]?.pt || customerInfo.orderType}
${
  customerInfo.orderType === 'delivery'
    ? `• Endereço: ${customerInfo.deliveryAddress || 'A combinar'}\n• Taxa de entrega: ${formatPrice(
        deliveryFee,
        currency
      )}`
    : ''
}
${
  customerInfo.orderType === 'dine_in'
    ? `• Mesa / Posição: ${customerInfo.tableNumber || 'Salão'}`
    : ''
}
• Pagamento: ${paymentLabels[customerInfo.paymentMethod]?.pt || customerInfo.paymentMethod}
${customerInfo.notes ? `• Observações gerais: ${customerInfo.notes}` : ''}`
    : `*DATOS DEL CLIENTE:*
• Nombre: ${customerInfo.customerName || 'No informado'}
• WhatsApp: ${customerInfo.customerPhone || 'No informado'}
• Modalidad: ${orderTypeLabels[customerInfo.orderType]?.es || customerInfo.orderType}
${
  customerInfo.orderType === 'delivery'
    ? `• Dirección: ${customerInfo.deliveryAddress || 'A coordinar'}\n• Costo delivery: ${formatPrice(
        deliveryFee,
        currency
      )}`
    : ''
}
${
  customerInfo.orderType === 'dine_in'
    ? `• N° de Mesa: ${customerInfo.tableNumber || 'Salón'}`
    : ''
}
• Forma de Pago: ${paymentLabels[customerInfo.paymentMethod]?.es || customerInfo.paymentMethod}
${customerInfo.notes ? `• Observaciones: ${customerInfo.notes}` : ''}`;

  const footer = isPt
    ? `*TOTAL DO PEDIDO:* ${formatPrice(grandTotalPyg, currency)} (${formatPrice(
        grandTotalPyg,
        'PYG'
      )})\n\n_Enviado pelo Catálogo Digital de ${storeName}_`
    : `*TOTAL DEL PEDIDO:* ${formatPrice(grandTotalPyg, currency)} (${formatPrice(
        grandTotalPyg,
        'PYG'
      )})\n\n_Enviado desde el Catálogo Digital de ${storeName}_`;

  return `${header}\n\n*ITENS:* \n${itemsList}\n\n${infoSection}\n\n${footer}`;
}

export function openWhatsAppOrder(
  cartItems: CartItem[],
  customerInfo: CustomerOrderInfo,
  totalPyg: number,
  currency: Currency,
  lang: Language,
  phone: string = WHATSAPP_PHONE,
  storeName: string = STORE_NAME,
  deliveryFee: number = 0
) {
  const message = buildWhatsAppMessage(
    cartItems,
    customerInfo,
    totalPyg,
    currency,
    lang,
    storeName,
    deliveryFee
  );
  const encoded = encodeURIComponent(message);
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanPhone}?text=${encoded}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
