package ee.mtiitson.gradeio.repository;


import ee.mtiitson.gradeio.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface UserRepository extends PagingAndSortingRepository<User, String> {

}
