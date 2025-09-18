export interface CreateProductRequest {
    name: string;
    description: string;
    price: number;
    currency: string;
    unlimited?: boolean;
    quantity?: number;
}
export interface CreateProductResponse {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: string;
    quantity: number;
    is_shippable: boolean;
    unlimited: boolean;
    integration: number;
    domain: string;
    metadata: Record<string, any> | null;
    slug: string;
    product_code: string;
    quantity_sold: number;
    type: string;
    shipping_fields: Record<string, any>;
    active: boolean;
    in_stock: boolean;
    minimum_orderable: number;
    maximum_orderable: number | null;
    low_stock_alert: boolean | number;
    createdAt: string;
    updatedAt: string;
}
export interface ListProductsQuery {
    perPage?: number;
    page?: number;
    from?: string;
    to?: string;
}
export interface ProductItem {
    id: number;
    name: string;
    description: string;
    product_code: string;
    slug: string;
    currency: string;
    price: number;
    quantity: number;
    quantity_sold: number;
    active: boolean;
    domain: string;
    type: string;
    in_stock: boolean;
    unlimited: boolean;
    metadata: Record<string, any> | null;
    files: Array<{
        key: string;
        type: string;
        path: string;
        original_filename: string;
    }> | [];
    success_message?: string | null;
    redirect_url?: string | null;
    split_code?: string | null;
    notification_emails?: string | null;
    minimum_orderable: number;
    maximum_orderable: number | null;
    createdAt: string;
    updatedAt: string;
    digital_assets: any[];
    variant_options: any[];
    is_shippable: boolean;
    shipping_fields: Record<string, any>;
    integration: number;
    low_stock_alert: number;
}
export interface ListProductsResponse {
    data: ProductItem[];
    meta: {
        total: number;
        skipped: number;
        perPage: number;
        page: number;
        pageCount: number;
    };
}
export interface FetchProductResponse extends ProductItem {
}
export interface UpdateProductRequest {
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    unlimited?: boolean;
    quantity?: number;
}
export interface UpdateProductResponse extends ProductItem {
}
