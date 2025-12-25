CREATE TABLE IF NOT EXISTS preorders (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    ip_address VARCHAR(45)
);

CREATE INDEX idx_preorders_email ON preorders(email);
CREATE INDEX idx_preorders_created_at ON preorders(created_at DESC);
