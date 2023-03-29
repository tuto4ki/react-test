export function validationName(name: string | undefined): string {
  if (name && /^[A-Z]{1}[a-zA-Z]{0,24}$/.test(name)) {
    return name;
  }
  return '';
}

export function validationPrice(price: string | undefined): number {
  if (price && /^[0-9]{0,15}$/.test(price)) {
    return +price;
  }
  return 0;
}

export function validationDescription(description: string | undefined): string {
  if (description && description.length < 100) {
    return description;
  }
  return '';
}

export function validateDate(date: string | undefined): string {
  if (date) {
    return date;
  }
  return '';
}

export function validationTypeRoom(room: string | undefined): string {
  if (room && room !== '0') {
    return room;
  }
  return '';
}
