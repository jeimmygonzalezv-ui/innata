export function Footer() {
    return (
        <footer className="py-8 border-t border-border/20 bg-transparent">
            <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Bloom Empower. Todos los derechos reservados.</p>
                <p>Un evento para potenciar el liderazgo femenino.</p>
            </div>
        </footer>
    );
}
