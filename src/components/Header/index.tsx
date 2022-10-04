
import { Container, Content } from '../styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
            
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>

            </Content>
        </Container>
    )
}