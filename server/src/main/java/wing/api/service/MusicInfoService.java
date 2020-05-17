package wing.api.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import wing.api.domain.album.Album;
import wing.api.domain.artist.Artist;
import wing.api.domain.music.Music;
import wing.api.domain.musicInfo.MusicInfo;
import wing.api.domain.musicInfo.MusicInfoRepository;

import java.util.Set;

@RequiredArgsConstructor
@Service
public class MusicInfoService {

    private final MusicInfoRepository musicInfoRepository;

    @Transactional
    public void save(Artist artist, Album album, Music music) {

        MusicInfo musicInfo = musicInfoRepository.save(MusicInfo.builder()
                .artist(artist)
                .album(album)
                .music(music)
                .build()
        );

        artist.getInfos().add(musicInfo);
        album.getInfos().add(musicInfo);
        music.getInfos().add(musicInfo);

        album.getMusicList().add(music);
    }


    @Transactional
    public void delete(Artist deleteArtist, Music music) {

        Set<MusicInfo> infos = music.getInfos();
        infos.removeIf(info -> info.getArtist() == deleteArtist);
        music.infosUpdate(infos);

        Set<MusicInfo> musicInfos = musicInfoRepository.findByMusic_MusicId(music.getMusicId());

        for (MusicInfo info : musicInfos) {
            if (info.getArtist() == deleteArtist) {
                System.out.println(info.getArtist().getArtistId() + " 삭제");
                musicInfoRepository.delete(info);
            }
        }
    }
}

