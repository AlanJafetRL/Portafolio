/**
 * Interface que define la metadata de un item del carrusel.
 * @interface ICarouselItem
 */
export interface ICarouselItem {
    id: number;
    title?: {
        first: string;
        second: string;
    };
    subtitle?: string;
    link?: string;
    image: string;
    order?: number;
    marginLeft?: number;
}