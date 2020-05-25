package wing.api.domain.transactionData;

import org.springframework.data.jpa.repository.JpaRepository;
import wing.api.domain.artist.Artist;
import wing.api.domain.user.User;

import java.util.Set;

public interface TransactionDataRepository extends JpaRepository<TransactionData, Long> {
    Set<TransactionData> findByArtist_ArtistId(Long artistId);
    Set<TransactionData> findByUser(User user);
}
