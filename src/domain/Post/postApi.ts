import { api } from "../../api/apiConfig";
import { PageAPI, PageParams } from "../../api/apiTypes";
import { PostAPI } from "./postTypes";

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const result = await api.get<PageAPI<PostAPI>>('user/post',{
    params,
  })
  return result.data
  
}

export const postApi = {
    getList
}
