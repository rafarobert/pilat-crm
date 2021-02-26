<?php
namespace Api\V8\OAuth2\Entity;

use League\OAuth2\Server\Entities\UserEntityInterface;

class UserEntity implements UserEntityInterface
{

    public function __construct($id_user = null)
    {
        $this->id_user = $id_user;
    } 	
    /**
     * @inheritdoc
     */
    public function getIdentifier()
    {
	if($this->id_user === null){
	   // we skip this right now, since we are not using scopes atm
           return true;
	}
	return $this->id_user;
        
    }
}
