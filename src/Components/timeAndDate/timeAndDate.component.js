export function CurrentDate() {
  return <h2>{new Date().toLocaleDateString()}</h2>;
}

export function CurrentTime() {
  return <h2>{new Date().toLocaleTimeString()}</h2>;
}
