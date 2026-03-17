type Cn = string | undefined | null | false;

export function cn(...classes: Cn[]) {
  return classes.filter(Boolean).join(" ");
}

