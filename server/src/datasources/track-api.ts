import { RESTDataSource } from '@apollo/datasource-rest';
import { TrackModel, AuthorModel } from '../models';

export class TrackAPI extends RESTDataSource {
	baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';

	getTracksForHome() {
		return this.get<TrackModel[]>('tracks');
	}

	getAuthor(authorId: string) {
		return this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
	}

	getTrack(trackId: string) {
		return this.get(`track/${encodeURIComponent(trackId)}`);
	}

	getTrackModules(trackId: string) {
		return this.get(`track/${encodeURIComponent(trackId)}/modules`);
	}
}
